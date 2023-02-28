import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('login')
    t.string('password')
    t.string('email')
    t.nullable.int('tokenVersion')
    t.nullable.field('exhibitor', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.exhibitor
      },
    })
  },
})
