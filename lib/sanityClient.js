import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {apiVersion, dataset, projectId} from './api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
