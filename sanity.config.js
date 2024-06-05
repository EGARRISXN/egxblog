'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {title, basePath, projectId, dataset} from './lib/api.js'
import {schemaTypes} from './schemas/index.js'

export default defineConfig({
  title,
  basePath,
  projectId: projectId || '',
  dataset: dataset || '',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), media()],
})
