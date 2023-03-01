export const client = createClient({
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '53tevx0r',
  dataset: 'production',
  apiVersion: '2023-03-01',
  useCdn: true,
 token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
