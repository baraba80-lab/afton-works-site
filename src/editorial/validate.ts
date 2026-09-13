import type { Dataset, Entity, Kind, Problem, Block } from './contracts.js';
export class ContentError extends Error {
  constructor(public problems:Problem[]) { super(problems.map(p=>`${p.code} ${p.path}: ${p.message}`).join('\n')); this.name='ContentError'; }
}
const SLUG=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export function validSlug(x:unknown):x is string { return typeof x==='string' && x.length<=80 && SLUG.test(x); }
export function validDate(x:unknown):x is string {
  if(typeof x!=='string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(x)) return false;
  const [y,m,d]=x.slice(0,10).split('-').map(Number);
  const [h,n,s]=x.slice(11,19).split(':').map(Number);
  return m>=1&&m<=12&&d>=1&&d<=new Date(Date.UTC(y,m,0)).getUTCDate()&&h<24&&n<60&&s<60&&Number.isFinite(Date.parse(x));
}
type Check=(v:unknown,p:string,e:Problem[])=>void;
const fail=(e:Problem[],path:string,message:string,code='INVALID_FIELD')=>{e.push({code,path,message});};
const text:Check=(v,p,e)=>{if(typeof v!=='string'||!v.trim())fail(e,p,'Expected non-empty text');};
const integer=(min:number):Check=>(v,p,e)=>{if(typeof v!=='number'||!Number.isSafeInteger(v)||v<min)fail(e,p,`Expected integer >= ${min}`);};
const positive:Check=(v,p,e)=>{if(typeof v!=='number'||!Number.isFinite(v)||v<=0)fail(e,p,'Expected positive finite number');};
const date:Check=(v,p,e)=>{if(!validDate(v))fail(e,p,'Expected valid ISO timestamp with timezone');};
const slug:Check=(v,p,e)=>{if(!validSlug(v))fail(e,p,'Invalid slug');};
const one=(...options:unknown[]):Check=>(v,p,e)=>{if(!options.includes(v))fail(e,p,'Invalid state/value');};
const optional=(fn:Check):Check=>(v,p,e)=>{if(v!==undefined)fn(v,p,e);};
const list=(fn:Check,min=0):Check=>(v,p,e)=>{if(!Array.isArray(v)){fail(e,p,'Expected array');return;} if(v.length<min)fail(e,p,'Empty array not allowed');v.forEach((x,i)=>fn(x,`${p}[${i}]`,e));};
const fields=(shape:Record<string,Check>):Check=>(v,p,e)=>{
  if(!v||typeof v!=='object'||Array.isArray(v)){fail(e,p,'Expected object');return;}
  const obj=v as Record<string,unknown>;
  for(const key of Object.keys(obj))if(!Object.hasOwn(shape,key))fail(e,`${p}.${key}`,'Unknown field');
  for(const [key,check] of Object.entries(shape))check(obj[key],`${p}.${key}`,e);
};
const id=(kind:Kind):Check=>(v,p,e)=>{if(typeof v!=='string'||!v.startsWith(kind+':')||!validSlug(v.slice(kind.length+1)))fail(e,p,`Expected ${kind}:id`);};
const https:Check=(v,p,e)=>{try{const u=new URL(String(v));if(typeof v!=='string'||u.protocol!=='https:'||u.username||u.password)throw Error();}catch{fail(e,p,'Expected credential-free HTTPS URL');}};
const season=fields({period:one('spring','summer','autumn','winter','all_year'),year:optional(integer(1))});
const block:Check=(v,p,e)=>{
  const b=v as {type?:string}|null;
  const t=b&&typeof b==='object'?b.type:undefined;
  const base={type:one(t)};
  const variants:Record<string,Check>={
    paragraph:fields({...base,text}),heading:fields({...base,level:one(2,3),anchor:slug,text}),
    list:fields({...base,ordered:one(true,false),items:list(text,1)}),quote:fields({...base,text,attribution:optional(text)}),
    entity_link:fields({...base,label:text,target:(x,q,es)=>{const r=x as {kind?:Kind}|null;const k=r?.kind;if(k!=='issue'&&k!=='article'&&k!=='scent'){fail(es,q,'Invalid route reference');return;}fields({kind:one(k),id:id(k)})(x,q,es);}}),
    external_link:fields({...base,label:text,href:https})
  };
  if(!t||!Object.hasOwn(variants,t)){fail(e,p,'Unsupported content block');return;} variants[t](v,p,e);
};
const blocks=list(block,1);
function common(k:Kind):Record<string,Check>{return {kind:one(k),id:id(k),revision:integer(1),reviewState:one('candidate','accepted'),publicationState:one('draft','published','archived'),updatedAt:date,publishedAt:optional(date)};}
const entity=(k:Kind,extra:Record<string,Check>)=>fields({...common(k),...extra});
const schemas={
  issues:entity('issue',{slug,title:text,issueNumber:integer(1),introduction:optional(text),season:optional(season),articleIds:list(id('article')),featuredScentId:optional(id('scent'))}),
  articles:entity('article',{slug,title:text,summary:optional(text),authorName:optional(text),body:blocks,primaryScentId:optional(id('scent')),additionalScentIds:optional(list(id('scent')))}),
  scents:entity('scent',{slug,title:text,summary:text,story:optional(list(block)),perception:optional(fields({firstContact:optional(text),body:optional(text),aftertone:optional(text)})),seasonTags:optional(list(season)),materialLinks:optional(list(fields({materialId:id('material'),relation:one('sensory_reference','documented_ingredient'),evidenceRef:optional(text)}))),objectIds:optional(list(id('object'))),recordIds:optional(list(id('record')))}),
  materials:entity('material',{title:text,category:one('aroma_ingredient','physical_material','sensory_reference'),description:text,sensoryNotes:optional(list(text))}),
  objects:entity('object',{title:text,objectType:one('study_object','collaboration_object','edition'),description:text,makerName:optional(text),context:optional(text)}),
  records:entity('record',{title:text,recordType:one('observation','process','field_note'),evidenceType:one('illustrative','documented'),body:blocks,observedAt:optional(date),placeLabel:optional(text),evidenceRef:optional(text)}),
  products:entity('product',{scentId:id('scent'),title:text,format:one('sample','full_bottle'),volumeMl:optional(positive),price:optional(fields({currency:one('KRW'),amount:integer(0)})),sku:optional(text)}),
  availabilities:entity('availability',{productId:id('product'),state:one('unknown','planned','available','unavailable','discontinued'),source:one('candidate','manual'),checkedAt:optional(date),validUntil:optional(date),note:optional(text)})
};
export function allEntities(d:Dataset):Entity[]{return [...d.issues,...d.articles,...d.scents,...d.materials,...d.objects,...d.records,...d.products,...d.availabilities];}
export function validateDataset(input:unknown):Dataset {
  const errors:Problem[]=[];
  const root:Record<string,Check>={schemaVersion:one('afton-editorial-core/0.1'),site:fields({reviewState:one('candidate','accepted'),name:one('AFTON'),locale:one('ko-KR'),home:fields({heading:text,introduction:optional(text),featuredIssueId:optional(id('issue')),featuredScentId:optional(id('scent'))}),info:fields({title:text,body:blocks,sampleGuide:blocks,contactEmail:optional((v,p,e)=>{if(typeof v!=='string'||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))fail(e,p,'Invalid email');})})})};
  for(const [name,check] of Object.entries(schemas))root[name]=list(check);
  fields(root)(input,'dataset',errors);
  if(errors.length)throw new ContentError(errors);
  const d=structuredClone(input) as Dataset;
  const entities=allEntities(d); const index=new Map<string,Entity>();
  const unique=(values:(string|number)[],p:string)=>{if(new Set(values).size!==values.length)fail(errors,p,'Duplicate value','DUPLICATE');};
  for(const e of entities){
    if(index.has(e.id))fail(errors,e.id,'Duplicate ID','DUPLICATE_ID');index.set(e.id,e);
    if(e.publicationState!=='draft'&&(!e.publishedAt||e.reviewState!=='accepted'))fail(errors,e.id,'Published/archived content requires accepted review and publication date','INVALID_PUBLICATION');
    if(e.publishedAt&&Date.parse(e.publishedAt)>Date.parse(e.updatedAt))fail(errors,e.id,'Publication date after update','INVALID_DATES');
  }
  for(const arr of [d.issues,d.articles,d.scents])unique(arr.map(e=>e.slug),'slugs');
  unique(d.issues.map(e=>e.issueNumber),'issueNumbers'); unique(d.availabilities.map(e=>e.productId),'availability.productId');
  function link(target:string|undefined,kind:Kind,path:string){if(target===undefined)return;const e=index.get(target);if(!e||e.kind!==kind)fail(errors,path,`Missing/wrong target: ${target}`,'BROKEN_REFERENCE');}
  function checkBlocks(bs:Block[]|undefined,path:string){
    const anchors:string[]=[];
    for(const b of bs??[]){if(b.type==='heading')anchors.push(b.anchor);if(b.type==='entity_link')link(b.target.id,b.target.kind,path);}
    unique(anchors,path+'.anchors');
  }
  for(const e of d.issues){unique(e.articleIds,e.id);e.articleIds.forEach(x=>link(x,'article',e.id));link(e.featuredScentId,'scent',e.id);if(e.publicationState!=='draft'&&!e.articleIds.length)fail(errors,e.id,'Published issue needs articles','EMPTY_PUBLISHED_ISSUE');}
  for(const e of d.articles){e.additionalScentIds??=[];unique([...(e.primaryScentId?[e.primaryScentId]:[]),...e.additionalScentIds],e.id);link(e.primaryScentId,'scent',e.id);e.additionalScentIds.forEach(x=>link(x,'scent',e.id));checkBlocks(e.body,e.id);}
  for(const e of d.scents){
    e.story??=[];e.seasonTags??=[];e.materialLinks??=[];e.objectIds??=[];e.recordIds??=[];
    unique(e.materialLinks.map(x=>x.materialId),e.id+'.materials');unique(e.objectIds,e.id+'.objects');unique(e.recordIds,e.id+'.records');
    for(const m of e.materialLinks){link(m.materialId,'material',e.id);const material=index.get(m.materialId);if(m.relation==='documented_ingredient'&&(!m.evidenceRef||material?.kind!=='material'||material.category!=='aroma_ingredient'))fail(errors,e.id,'Ingredient relationship needs ingredient category and evidence','INGREDIENT_EVIDENCE_REQUIRED');}
    e.objectIds.forEach(x=>link(x,'object',e.id));e.recordIds.forEach(x=>link(x,'record',e.id));checkBlocks(e.story,e.id);
  }
  d.materials.forEach(e=>{e.sensoryNotes??=[];});
  d.records.forEach(e=>{checkBlocks(e.body,e.id);if(e.evidenceType==='documented'&&!e.evidenceRef)fail(errors,e.id,'Documented record needs evidence','RECORD_EVIDENCE_REQUIRED');});
  d.products.forEach(e=>link(e.scentId,'scent',e.id));
  d.availabilities.forEach(e=>{link(e.productId,'product',e.id);if(e.checkedAt&&e.validUntil&&Date.parse(e.validUntil)<=Date.parse(e.checkedAt))fail(errors,e.id,'Invalid availability interval');});
  link(d.site.home.featuredIssueId,'issue','site.home.featuredIssueId');link(d.site.home.featuredScentId,'scent','site.home.featuredScentId');
  checkBlocks(d.site.info.body,'info');checkBlocks(d.site.info.sampleGuide,'info.samples');
  if(errors.length)throw new ContentError(errors);
  return d;
}
