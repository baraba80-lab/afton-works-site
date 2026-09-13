import { candidateDataset } from './candidate-v01.js';
import { createCore } from '../editorial/core.js';
// Environment/build switch only. URL/query strings cannot enable review content.
export function loadReviewCore() {
  const mode=process.env.AFTON_CONTENT_MODE??'review';
  if(mode!=='review')throw new Error('DEPLOY_HOLD: this fixture loader is review-only; supply approved content in a separate release change.');
  return createCore(candidateDataset,'review');
}
