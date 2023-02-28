import { objectType } from 'nexus'

export const Category = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Category',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.string('name')
    t.nullable.field('connection_type', { type: 'ConnectionTypeEnum' })
    t.nullable.int('sub_category')
    t.nullable.boolean('is_published')
    t.nullable.field('catalog', {
      type: 'Catalog',
      resolve(root: any) {
        return root.catalog
      },
    })
    t.nullable.int('catalogId')
    t.list.field('product', {
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
        return root.product
      },
    })
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
      type: 'CategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
