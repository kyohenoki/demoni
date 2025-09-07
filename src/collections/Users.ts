import type { CollectionConfig } from 'payload'
import { zumi } from '@/katachi/zumi'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: zumi,
    create: zumi,
    delete: zumi,
    read: zumi,
    update: zumi
  },
  admin: {
    defaultColumns: ['name', 'email', 'hitokoto'],
    useAsTitle: 'name'
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        ja: '名前'
      }
    },
    {
      name: 'hitokoto',
      type: 'text',
      label: {
        ja: '一言'
      }
    }
  ],
  timestamps: true
}
