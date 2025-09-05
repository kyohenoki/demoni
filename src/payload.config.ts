import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { en } from '@payloadcms/translations/languages/en'
import { ja } from '@payloadcms/translations/languages/ja'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Pages } from './collections/Pages'

export default buildConfig({
  admin: {
    livePreview: {
      url: 'http://localhost:3000'
    }
  },
  editor: lexicalEditor(),
  collections: [Pages],
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ''
    }
  }),
  cors: '*',
  sharp,
  typescript: {
    autoGenerate: true
  },
  i18n: {
    supportedLanguages: { en, ja }
  }
})
