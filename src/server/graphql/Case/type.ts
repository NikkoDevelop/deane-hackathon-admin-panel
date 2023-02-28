import { objectType } from 'nexus'

export const Case = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Case',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('partner_site_url')
    t.nullable.field('content_type', { type: 'MediaType' })
    t.nullable.string('html_content')
    t.nullable.string('video_url')
    t.nullable.boolean('is_published')
    t.nullable.boolean('is_import_substitution')
    t.nullable.field('exhibitor', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.exhibitor
      },
    })
    t.nullable.int('exhibitorId')
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
  },
})
