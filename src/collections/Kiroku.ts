import type { CollectionConfig } from 'payload'
import { keishiki } from '@/katachi/keishiki'
import { koukaizumi, zumi } from '@/katachi/zumi'

export const Kiroku: CollectionConfig<'kiroku'> = {
  slug: 'kiroku',
  access: {
    create: zumi,
    delete: zumi,
    read: koukaizumi,
    update: zumi
  },
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        ja: '題名'
      }
    },
    {
      name: 'hizuke',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: keishiki.timem
        },
        position: 'sidebar'
      },
      hooks: {
        beforeChange: [
          ({ value }) => {
            if (!value) {
              return new Date()
            }
            return value
          }
        ]
      },
      label: {
        ja: '日付'
      }
    },
    {
      name: 'author',
      type: 'relationship',
      required: true,
      admin: {
        position: 'sidebar'
      },
      hasMany: true,
      relationTo: 'users',
      label: {
        ja: '著者'
      }
    }
  ]
}
