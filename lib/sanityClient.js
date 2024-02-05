import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {apiVersion, dataset, projectId, useCdn} from './env'

export const client = createClient({
  projectId: projectId || 'yjby8z6w',
  dataset: dataset || 'production',
  apiVersion: apiVersion || '2024-02-01',
  useCdn: useCdn,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// export function urlFor(source) {
//   return builder.image(source).auto('format').fit('max').url()
// }
