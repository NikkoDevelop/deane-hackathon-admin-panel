import { objectType } from 'nexus'

export const Location = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Location',
  definition(t) {
    t.int('id')
    t.nullable.string('adress')
    t.nullable.string('gps_coords')
    t.nullable.string('name')
    t.nullable.string('cooperation_type')
    t.nullable.string('partner_site_url')
    t.field('exhibitor', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.exhibitor
      },
    })
    t.int('exhibitorId')
    t.boolean('is_visible')
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
  },
})
