import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {apiVersion, dataset, projectId, useCdn} from './env.js'

export const client = createClient({
  projectId: projectId || '',
  dataset: dataset || '',
  apiVersion: apiVersion || '',
  useCdn: useCdn,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// export function urlFor(source) {
//   return builder.image(source).auto('format').fit('max').url()
// }

/* To use icons for the look of your Sanity Studio, install your favorite icon library and import into your schema, but remember to change the file from .js/.ts to .jsx/.tsx. */
