import type { Entity, Mode, Issue, Article, ScentDossier, Block, AvailabilityState } from './contracts.js';
import { validateDataset, allEntities, ContentError, validDate } from './validate.js';
export interface Link { href:string; label:string }
export type ViewBlock = Exclude<Block,{type:'entity_link'}|{type:'external_link'}> | {type:'link';href:string;label:string};
export interface Section { id?:string; title:string; paragraphs?:string[]; blocks?:ViewBlock[]; links?:Link[] }
export interface IssueContext {slug:string; title:string; position:number; total:number; links:Link[]}
export interface PageView {path:string; kind:string; title:string; summary?:string; state?:string; blocks?:ViewBlock[]; sections:Section[]; contexts?:IssueContext[]}
export function visible(e:Entity,mode:Mode,now:string):boolean {
  if(mode==='review')return true;
  return e.reviewState==='accepted'&&e.publicationState!=='draft'&&!!e.publishedAt&&Date.parse(e.publishedAt)<=Date.parse(now)&&!(e.kind==='record'&&e.evidenceType==='illustrative');
}
export function pathFor(e:Issue|Article|ScentDossier):string {
  const prefix={issue:'issues',article:'articles',scent:'scents'};
  return `/${prefix[e.kind]}/${e.slug}/`;
}
export function contextFor(contexts:IssueContext[],slug:string|null):IssueContext|undefined {return contexts.find(c=>c.slug===slug);}
const statusLabels:Record<AvailabilityState,string>={unknown:'제공 일정 미정',planned:'제공 준비 중',available:'제공 가능 안내',unavailable:'현재 제공하지 않음',discontinued:'제공 종료'};
export function createCore(input:unknown,mode:Mode='review',now=new Date().toISOString()) {
  if(mode!=='review'&&mode!=='public')throw Error('Invalid content mode');
  if(!validDate(now))throw Error('Invalid evaluation timestamp');
  const d=validateDataset(input);
  const all=allEntities(d); const index=new Map<string,Entity>(all.map(e=>[e.id,e]));
  const display=(e:Entity)=>visible(e,mode,now);
  const get=(key:string|undefined)=>{const e=key?index.get(key):undefined;return e&&display(e)?e:undefined;};
  const issues=d.issues.filter(display).sort((a,b)=>{
    const rank=(x:Issue)=>x.publicationState==='published'?0:x.publicationState==='draft'?1:2;
    return rank(a)-rank(b)||((b.publishedAt?Date.parse(b.publishedAt):0)-(a.publishedAt?Date.parse(a.publishedAt):0))||b.issueNumber-a.issueNumber||a.id.localeCompare(b.id);
  });
  const articles=d.articles.filter(display),scents=d.scents.filter(display);
  const problems:{code:string;path:string;message:string}[]=[];
  for(const e of all)if(e.publicationState!=='draft'&&e.publishedAt&&Date.parse(e.publishedAt)>Date.parse(now))problems.push({code:'FUTURE_PUBLICATION',path:e.id,message:'Scheduled publication is out of scope'});
  function required(target:string|undefined,owner:string){if(target&& !get(target))problems.push({code:'TARGET_NOT_PUBLIC',path:owner,message:'Required target is not public: '+target});}
  if(mode==='public'){
    if(d.site.reviewState!=='accepted')problems.push({code:'CANDIDATE_SITE',path:'site',message:'Candidate fixture cannot be a public site'});
    for(const e of issues){e.articleIds.forEach(x=>required(x,e.id));required(e.featuredScentId,e.id);}
    for(const e of articles)required(e.primaryScentId,e.id);
    for(const e of d.products.filter(display))required(e.scentId,e.id);
    for(const e of all.filter(display)){
      const bs=('body' in e?e.body: e.kind==='scent'?e.story:[])??[];
      bs.forEach(b=>{if(b.type==='entity_link')required(b.target.id,e.id);});
    }
    [...d.site.info.body,...d.site.info.sampleGuide].forEach(b=>{if(b.type==='entity_link')required(b.target.id,'site.info');});
  }
  if(problems.length)throw new ContentError(problems);
  const route=(e:Entity|undefined):Link|undefined=>e&&(e.kind==='issue'||e.kind==='article'||e.kind==='scent')?{href:pathFor(e),label:e.title}:undefined;
  const links=(ids:(string|undefined)[])=>ids.map(x=>route(get(x))).filter((x):x is Link=>!!x);
  function body(bs:Block[]|undefined,prefix='body'):ViewBlock[]{
    return (bs??[]).flatMap((b):ViewBlock[]=>{
      if(b.type==='entity_link'){const r=route(get(b.target.id));return r?[{type:'link',href:r.href,label:b.label}]:[];}
      if(b.type==='external_link')return [{type:'link',href:b.href,label:b.label}];
      if(b.type==='heading')return [{...b,anchor:`${prefix}-${b.anchor}`}];
      return [structuredClone(b)];
    });
  }
  function availability(productId:string){
    const a=d.availabilities.find(e=>e.productId===productId&&display(e));
    let state:AvailabilityState='unknown';
    if(a&&a.source==='manual'&&a.reviewState==='accepted'){
      const future=a.checkedAt&&Date.parse(a.checkedAt)>Date.parse(now);
      const stale=a.validUntil&&Date.parse(a.validUntil)<=Date.parse(now);
      if(!future&&!stale&&(a.state!=='available'||(a.checkedAt&&a.validUntil)))state=a.state;
    }
    return {state,label:statusLabels[state],checkedAt:a?.source==='manual'?a.checkedAt:undefined,action:{href:'/info/#samples',label:'샘플 안내 읽기'} as Link};
  }
  function issueContexts(a:Article):IssueContext[]{return issues.filter(i=>i.articleIds.includes(a.id)).map(i=>{
    const siblings=i.articleIds.map(x=>get(x)).filter((x):x is Article=>x?.kind==='article');const at=siblings.findIndex(x=>x.id===a.id);
    const items:Link[]=[{href:pathFor(i),label:'발행물 목차: '+i.title}];
    if(at>0)items.push({href:pathFor(siblings[at-1])+'?issue='+i.slug,label:'이전 기사: '+siblings[at-1].title});
    if(at+1<siblings.length)items.push({href:pathFor(siblings[at+1])+'?issue='+i.slug,label:'다음 기사: '+siblings[at+1].title});
    return {slug:i.slug,title:i.title,position:at+1,total:siblings.length,links:items};
  });}
  function pages():PageView[]{
    const chosen=get(d.site.home.featuredIssueId);const featured=chosen?.kind==='issue'?chosen:issues[0];
    const scent=get(d.site.home.featuredScentId);const primaryScent=scent?.kind==='scent'?scent:undefined;
    const views:PageView[]=[{path:'/',kind:'home',title:d.site.home.heading,summary:d.site.home.introduction,sections:[
      {id:'issues',title:'발행물',paragraphs:!issues.length?['아직 공개된 발행물이 없습니다.']:[],links:[...(featured?[{href:pathFor(featured),label:(featured.publicationState==='archived'?'지난 발행물: ':'이슈 읽기: ')+featured.title}]:[]),...issues.filter(i=>i.id!==featured?.id).map(i=>({href:pathFor(i),label:i.title}))]},
      {id:'scents',title:'향기 기록',paragraphs:!scents.length?['향기 기록을 준비하고 있습니다.']:[],links:[...(primaryScent?[{href:pathFor(primaryScent),label:'향기 기록 바로 보기: '+primaryScent.title}]:[]),...scents.filter(s=>s.id!==primaryScent?.id).map(s=>({href:pathFor(s),label:s.title}))]},
      {title:'안내',links:[{href:'/info/',label:'AFTON 안내'},{href:'/info/#samples',label:'샘플 안내 읽기'}]}
    ]}];
    for(const i of issues)views.push({path:pathFor(i),kind:'issue',title:i.title,summary:i.introduction,state:i.publicationState,sections:[
      {title:'이 발행물의 글',paragraphs:i.articleIds.length?[]:['기사 연결 전'],links:i.articleIds.flatMap(x=>{const a=get(x);return a?.kind==='article'?[{href:pathFor(a)+'?issue='+i.slug,label:a.title}]:[];})},
      {title:'관련 향',links:links([i.featuredScentId])},{title:'돌아가기',links:[{href:'/#issues',label:'발행물 목록으로'}]}
    ]});
    for(const a of articles)views.push({path:pathFor(a),kind:'article',title:a.title,summary:a.summary,state:a.publicationState,blocks:body(a.body),contexts:issueContexts(a),sections:[
      {title:'관련 향기 기록',links:links([a.primaryScentId,...(a.additionalScentIds??[])])},
      {title:'수록 발행물',links:issueContexts(a).map(c=>c.links[0])},
      {title:'돌아가기',links:[{href:'/#issues',label:'발행물 목록으로'}]}
    ]});
    for(const s of scents){
      const sections:Section[]=[];
      const p=s.perception;
      for(const [label,value] of [['처음',p?.firstContact],['중심',p?.body],['여운',p?.aftertone]])if(value)sections.push({title:label!,paragraphs:[value]});
      for(const m of s.materialLinks??[]){const v=get(m.materialId);if(v?.kind==='material')sections.push({id:v.id.replace(':','-'),title:v.title,paragraphs:[m.relation==='sensory_reference'?'감각적 참조 (실제 배합 성분을 뜻하지 않음)':'근거가 확인된 원료',v.description,...(v.sensoryNotes??[])]});}
      for(const oid of s.objectIds??[]){const v=get(oid);if(v?.kind==='object')sections.push({id:v.id.replace(':','-'),title:v.title,paragraphs:[v.description,...(v.context?[v.context]:[])]});}
      for(const rid of s.recordIds??[]){const v=get(rid);if(v?.kind==='record')sections.push({id:v.id.replace(':','-'),title:v.title,paragraphs:[...(v.evidenceType==='illustrative'?['구성 예시 / 실제 관찰 기록 아님']:[]),...(v.observedAt?[v.observedAt]:[])],blocks:body(v.body,v.id.replace(':','-'))});}
      sections.push({title:'관련 글',links:articles.filter(a=>a.primaryScentId===s.id||a.additionalScentIds?.includes(s.id)).map(a=>({href:pathFor(a),label:a.title}))});
      const products=d.products.filter(e=>e.scentId===s.id&&display(e));
      sections.push({id:'availability',title:'형식과 제공 상태',paragraphs:products.length?['현재 이 화면에서는 주문이나 예약을 받지 않습니다.']:['제품 형식과 제공 안내는 아직 등록되지 않았습니다.']});
      for(const prod of products){const av=availability(prod.id);sections.push({title:prod.title,paragraphs:[prod.format==='sample'?'샘플':'본품',...(prod.volumeMl!==undefined?[`${prod.volumeMl} ml`]:[]),...(prod.price?[`${prod.price.amount.toLocaleString('ko-KR')}원`]:[]),av.label,...(av.checkedAt?['안내 확인: '+av.checkedAt]:[])],links:[av.action]});}
      if(!products.length)sections.push({title:'샘플 안내',links:[{href:'/info/#samples',label:'샘플 안내 읽기'}]});
      views.push({path:pathFor(s),kind:'scent',title:s.title,summary:s.summary,state:s.publicationState,blocks:body(s.story),sections});
    }
    views.push({path:'/info/',kind:'info',title:d.site.info.title,blocks:body(d.site.info.body),sections:[{id:'samples',title:'샘플 안내',blocks:body(d.site.info.sampleGuide,'samples')},...(d.site.info.contactEmail?[{title:'문의',links:[{href:'mailto:'+d.site.info.contactEmail,label:d.site.info.contactEmail}]}]:[]),{title:'돌아가기',links:[{href:'/',label:'AFTON 홈'}]}]});
    return views;
  }
  return {pages,availability,issueContexts,mode};
}
