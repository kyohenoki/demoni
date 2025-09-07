import type { Access, AccessArgs } from 'payload'

import type { User } from '@/payload-types'

type isZumi = (args: AccessArgs<User>) => boolean

export const zumi: isZumi = ({ req: { user } }) => {
  return Boolean(user)
}

export const koukaizumi: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published'
    }
  }
}
