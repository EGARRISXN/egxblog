import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {apiVersion, dataset, projectId, useCdn} from './env.js'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
