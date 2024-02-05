'use client'

/* This route is responsible for the built-in authoring environment using Sanity Studio. All routes under your studio path is handled by this file using Next.js' catch-all routes: https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes You can learn more about the next-sanity package here: https://github.com/sanity-io/next-sanity */

import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config.js'

export function Studio() {
  return <NextStudio config={config} />
}

/* Example of how to use the StudioProvider and StudioLayout components. Put components in as children and you'll have access to the same React hooks as Studio gives you when writing plugins. */

// import {NextStudio} from 'next-sanity/studio'
// import {StudioProvider, StudioLayout} from 'sanity'

// import config from '../../../sanity.config'

// function StudioPage() {
//   return (
//     <NextStudio config={config}>
//       <StudioProvider config={config}>
//         <StudioLayout />
//       </StudioProvider>
//     </NextStudio>
//   )
// }
