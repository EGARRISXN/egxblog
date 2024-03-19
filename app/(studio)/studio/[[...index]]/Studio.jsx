'use client'
import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config.js'

export function Studio() {
  return <NextStudio config={config} />
}
