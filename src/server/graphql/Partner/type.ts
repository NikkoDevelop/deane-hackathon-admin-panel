import { objectType } from 'nexus'

export const Partner = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Partner',
  definition(t) {
    t.int('id')
    t.nullable.string('name')
    t.nullable.field('logo', {
      type: 'Media',
      resolve(root: any) {
        return root.logo
      },
    })
    t.nullable.int('display_order')
    t.nullable.boolean('is_published')
    t.nullable.int('mediaId')
    t.field('exhibitor', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.exhibitor
      },
    })
    t.int('exhibitorId')
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
  },
})
