/** Candidate editorial contracts. No presentation tokens or private-context fields. */
export type Kind = 'issue' | 'article' | 'scent' | 'material' | 'object' | 'record' | 'product' | 'availability';
export type Id<K extends Kind> = `${K}:${string}`;
export type Mode = 'review' | 'public';
export type ReviewState = 'candidate' | 'accepted';
export type PublicationState = 'draft' | 'published' | 'archived';
export interface Meta<K extends Kind> {
  kind: K; id: Id<K>; revision: number; reviewState: ReviewState;
  publicationState: PublicationState; updatedAt: string; publishedAt?: string;
}
export interface Season { period: 'spring'|'summer'|'autumn'|'winter'|'all_year'; year?: number }
export type RoutedKind = 'issue' | 'article' | 'scent';
export type Ref = { [K in RoutedKind]: {kind: K; id: Id<K>} }[RoutedKind];
export type Block =
  | {type:'paragraph'; text:string}
  | {type:'heading'; level:2|3; anchor:string; text:string}
  | {type:'list'; ordered:boolean; items:string[]}
  | {type:'quote'; text:string; attribution?:string}
  | {type:'entity_link'; target:Ref; label:string}
  | {type:'external_link'; href:string; label:string};
export interface Issue extends Meta<'issue'> {
  slug:string; title:string; issueNumber:number; introduction?:string; season?:Season;
  articleIds:Id<'article'>[]; featuredScentId?:Id<'scent'>;
}
export interface Article extends Meta<'article'> {
  slug:string; title:string; summary?:string; authorName?:string; body:Block[];
  primaryScentId?:Id<'scent'>; additionalScentIds?:Id<'scent'>[];
}
export interface ScentDossier extends Meta<'scent'> {
  slug:string; title:string; summary:string; story?:Block[];
  perception?:{firstContact?:string; body?:string; aftertone?:string}; seasonTags?:Season[];
  materialLinks?:{materialId:Id<'material'>; relation:'sensory_reference'|'documented_ingredient'; evidenceRef?:string}[];
  objectIds?:Id<'object'>[]; recordIds?:Id<'record'>[];
}
export interface Material extends Meta<'material'> {
  title:string; category:'aroma_ingredient'|'physical_material'|'sensory_reference';
  description:string; sensoryNotes?:string[];
}
export interface EditorialObject extends Meta<'object'> {
  title:string; objectType:'study_object'|'collaboration_object'|'edition';
  description:string; makerName?:string; context?:string;
}
export interface EditorialRecord extends Meta<'record'> {
  title:string; recordType:'observation'|'process'|'field_note';
  evidenceType:'illustrative'|'documented'; body:Block[];
  observedAt?:string; placeLabel?:string; evidenceRef?:string;
}
export interface Product extends Meta<'product'> {
  scentId:Id<'scent'>; title:string; format:'sample'|'full_bottle'; volumeMl?:number;
  price?:{currency:'KRW'; amount:number}; sku?:string;
}
export type AvailabilityState = 'unknown'|'planned'|'available'|'unavailable'|'discontinued';
export interface Availability extends Meta<'availability'> {
  productId:Id<'product'>; state:AvailabilityState; source:'candidate'|'manual';
  checkedAt?:string; validUntil?:string; note?:string;
}
export type Entity = Issue|Article|ScentDossier|Material|EditorialObject|EditorialRecord|Product|Availability;
export interface SiteContent {
  reviewState:ReviewState; name:'AFTON'; locale:'ko-KR';
  home:{heading:string; introduction?:string; featuredIssueId?:Id<'issue'>; featuredScentId?:Id<'scent'>};
  info:{title:string; body:Block[]; sampleGuide:Block[]; contactEmail?:string};
}
export interface Dataset {
  schemaVersion:'afton-editorial-core/0.1'; site:SiteContent;
  issues:Issue[]; articles:Article[]; scents:ScentDossier[]; materials:Material[];
  objects:EditorialObject[]; records:EditorialRecord[]; products:Product[]; availabilities:Availability[];
}
export interface Problem { code:string; path:string; message:string }
