/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route. Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works. Add and edit the content schema in the './sanity/schema' folder. Add and edit the content schema in the './sanity/schema' folder. The `vision` plugin lets you query your content with GROQ in the studio. Go to https://www.sanity.io/docs/the-vision-plugin to learn more. */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './lib/env.js'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  basePath: '/studio',
  projectId: projectId || 'yjby8z6w',
  dataset: dataset || 'production',
  plugins: [structureTool(), visionTool({defaultApiVersion: apiVersion || '2024-02-01'})],
  schema: {
    types: schemaTypes,
  },
})
