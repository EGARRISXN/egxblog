import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {title, basePath, projectId, dataset, apiVersion} from './lib/env.js'
import {schemaTypes} from './schemas'

export default defineConfig({
  title: title,
  basePath: basePath,
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool(), media()],
  schema: {
    types: schemaTypes,
  },
})
