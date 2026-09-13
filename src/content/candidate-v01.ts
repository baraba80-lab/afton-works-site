import type { Dataset, Kind, Meta } from '../editorial/contracts.js';
// Fixed fixture timestamp, not an actual observation, release or manufacturing date.
function meta<K extends Kind>(kind:K, key:string):Meta<K> {
  return {kind,id:`${kind}:${key}`,revision:1,reviewState:'candidate',publicationState:'draft',updatedAt:'2026-09-13T00:00:00Z'};
}
export const candidateDataset:Dataset = {
  schemaVersion:'afton-editorial-core/0.1',
  site:{reviewState:'candidate',name:'AFTON',locale:'ko-KR',
    home:{heading:'발행물과 향기 기록',featuredIssueId:'issue:i001',featuredScentId:'scent:s001'},
    info:{title:'AFTON 안내',body:[{type:'paragraph',text:'사이트 기능을 확인하는 검토용 콘텐츠입니다.'}],
      sampleGuide:[{type:'paragraph',text:'샘플 제공 방식과 일정은 미정입니다. 현재 주문이나 예약을 받지 않습니다.'}]}},
  issues:[{...meta('issue','i001'),slug:'unnamed-sensations',title:'이름 붙이기 전의 감각',issueNumber:1,
    introduction:'후보 제목과 원고를 사용하는 동선 검토용 발행물입니다.',articleIds:['article:a001'],featuredScentId:'scent:s001'}],
  articles:[{...meta('article','a001'),slug:'what-remains',title:'사라진 뒤에 더 또렷해지는 것',
    summary:'기사에서 향기 기록으로 이어지는 연결을 시험합니다.',
    body:[{type:'paragraph',text:'이 글은 구조 테스트용 후보 원고입니다. 실제 조향 결과나 관찰 기록이 아닙니다.'},
      {type:'heading',level:2,anchor:'starting-point',text:'향기 기록으로 이어가기'},
      {type:'paragraph',text:'아래 관련 향 링크에서 설명과 제공 상태를 확인할 수 있습니다.'}],primaryScentId:'scent:s001'}],
  scents:[{...meta('scent','s001'),slug:'after-blue-sunset',title:'After Blue Sunset',summary:'검토용 향 이름입니다. 확정 향 설명은 아직 등록되지 않았습니다.',
    materialLinks:[{materialId:'material:m001',relation:'sensory_reference'}],objectIds:['object:o001'],recordIds:['record:r001']}],
  materials:[{...meta('material','m001'),title:'참조 소재 예시',category:'sensory_reference',description:'데이터 관계 시험용 참조입니다. 실제 배합 성분이라는 뜻이 아닙니다.'}],
  objects:[{...meta('object','o001'),title:'오브젝트 예시',objectType:'study_object',description:'관계 테스트용 후보 오브젝트입니다. 판매 상품이나 실제 협업 결과물이 아닙니다.'}],
  records:[{...meta('record','r001'),title:'기록 예시',recordType:'field_note',evidenceType:'illustrative',body:[{type:'paragraph',text:'구조 검증용 가상 기록입니다. 실제 현장 관찰이나 실험 결과가 아닙니다.'}]}],
  products:[{...meta('product','p001'),scentId:'scent:s001',title:'After Blue Sunset 샘플',format:'sample'}],
  availabilities:[{...meta('availability','av001'),productId:'product:p001',state:'unknown',source:'candidate',note:'제공 일정 미정'}]
};
