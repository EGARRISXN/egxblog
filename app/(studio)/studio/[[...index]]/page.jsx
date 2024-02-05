import {metadata as studioMetadata} from 'next-sanity/studio/metadata'
import {viewport as studioViewport} from 'next-sanity/studio/viewport'
import {Studio} from './Studio'

// Ensures the Studio route is statically generated.
export const dynamic = 'force-static'

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata = {
  ...studioMetadata,
  // Overrides the title until the Studio is loaded
  title: 'Loading Studio…',
}

export const viewport = {
  ...studioViewport,
  // Overrides the viewport to resize behavior
  interactiveWidget: 'resizes-content',
}

export default function StudioPage() {
  return <Studio />
}
