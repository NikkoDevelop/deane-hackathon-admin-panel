import { objectType } from 'nexus'

export const Media = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Media',
  definition(t) {
    t.int('id')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.string('url')
    t.field('type', { type: 'MediaType' })
    t.boolean('isApproved')
    t.list.field('exhibitor_for_logo', {
      type: 'Exhibitor',
      args: {
        where: 'ExhibitorWhereInput',
        orderBy: 'ExhibitorOrderByWithRelationInput',
        cursor: 'ExhibitorWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExhibitorScalarFieldEnum',
      },
      resolve(root: any) {
        return root.exhibitor_for_logo
      },
    })
    t.list.field('exhibitor_for_main_logo', {
      type: 'Exhibitor',
      args: {
        where: 'ExhibitorWhereInput',
        orderBy: 'ExhibitorOrderByWithRelationInput',
        cursor: 'ExhibitorWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ExhibitorScalarFieldEnum',
      },
      resolve(root: any) {
        return root.exhibitor_for_main_logo
      },
    })
    t.list.field('partner', {
      type: 'Partner',
      args: {
        where: 'PartnerWhereInput',
        orderBy: 'PartnerOrderByWithRelationInput',
        cursor: 'PartnerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PartnerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.partner
      },
    })
    t.list.field('feedback', {
      type: 'Feedback',
      args: {
        where: 'FeedbackWhereInput',
        orderBy: 'FeedbackOrderByWithRelationInput',
        cursor: 'FeedbackWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FeedbackScalarFieldEnum',
      },
      resolve(root: any) {
        return root.feedback
      },
    })
    t.list.field('product_logo', {
      type: 'Product',
      args: {
        where: 'ProductWhereInput',
        orderBy: 'ProductOrderByWithRelationInput',
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.product_logo
      },
    })
    t.list.field('product_medias', {
      type: 'Product',
      args: {
        where: 'ProductWhereInput',
        orderBy: 'ProductOrderByWithRelationInput',
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.product_medias
      },
    })
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
    t.field('_count', {
      type: 'MediaCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
