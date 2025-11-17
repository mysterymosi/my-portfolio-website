import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './config'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient(sanityConfig)

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
