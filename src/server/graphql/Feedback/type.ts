import { objectType } from 'nexus'

export const Feedback = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Feedback',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('text')
    t.nullable.int('rate')
    t.nullable.field('author', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.author
      },
    })
    t.list.field('medias', {
      type: 'Media',
      args: {
        where: 'MediaWhereInput',
        orderBy: 'MediaOrderByWithRelationInput',
        cursor: 'MediaWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MediaScalarFieldEnum',
      },
      resolve(root: any) {
        return root.medias
      },
    })
    t.nullable.field('company', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.company
      },
    })
    t.nullable.int('companyId')
    t.nullable.boolean('is_published')
    t.nullable.int('exhibitorId')
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
    t.field('_count', {
      type: 'FeedbackCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
