/* This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route. Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works. Add and edit the content schema in the './sanity/schema' folder. Add and edit the content schema in the './sanity/schema' folder. The `vision` plugin lets you query your content with GROQ in the studio. Go to https://www.sanity.io/docs/the-vision-plugin to learn more. */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {apiVersion, dataset, projectId, youtubeApiKey} from './lib/env.js'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion || ''}),
    colorInput(),
    media(),
    youtubeInput({apiKey: youtubeApiKey || ''}),
  ],
  schema: {
    types: schemaTypes,
  },
})
