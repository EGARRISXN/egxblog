import {metadata as studioMetadata} from 'next-sanity/studio/metadata'
import {viewport as studioViewport} from 'next-sanity/studio/viewport'
import {Studio} from './Studio'

export const dynamic = 'force-static'

export const metadata = {
  ...studioMetadata,
  title: 'Loading Studio…',
}

export const viewport = {
  ...studioViewport,
  interactiveWidget: 'resizes-content',
}

export default function StudioPage() {
  return <Studio />
}
