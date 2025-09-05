import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'Title',
        ja: '題名'
      }
    }
  ]
}
