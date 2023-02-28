import { objectType } from 'nexus'

export const Product = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Product',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('type', { type: 'ProductTypeEnum' })
    t.nullable.string('manufacturer')
    t.nullable.string('brand')
    t.nullable.string('name')
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
    t.nullable.field('video', {
      type: 'Media',
      resolve(root: any) {
        return root.video
      },
    })
    t.nullable.string('description')
    t.nullable.float('cost')
    t.list.field('meta_tags', { type: 'MetaTagsEnum' })
    t.nullable.field('category', {
      type: 'Category',
      resolve(root: any) {
        return root.category
      },
    })
    t.list.field('possibility_of_purchase', {
      type: 'PossibilityOfPurchaseEnum',
    })
    t.nullable.int('min_batch')
    t.list.field('payment_method', { type: 'PaymentMethodEnum' })
    t.list.field('delivery_method', { type: 'DeliveryMethodEnum' })
    t.list.field('standards', { type: 'StandardEnum' })
    t.nullable.string('analogs')
    t.nullable.boolean('is_published')
    t.nullable.boolean('is_import_substitution')
    t.nullable.field('Catalog', {
      type: 'Catalog',
      resolve(root: any) {
        return root.Catalog
      },
    })
    t.nullable.int('catalogId')
    t.nullable.int('mediaId')
    t.nullable.int('categoryId')
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
    t.field('_count', {
      type: 'ProductCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
