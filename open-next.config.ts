import { minify } from 'next/dist/build/swc'
import type { OpenNextConfig } from 'open-next/types/open-next.js'

const config = {
  default: {},
} satisfies OpenNextConfig

export default config;
export type Config = typeof config
