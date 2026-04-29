import { createImageUrlBuilder } from '@sanity/image-url';
import { s as sanityClient } from './LeadModal_BlCvHPUN.mjs';

const builder = createImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export { urlFor as u };
