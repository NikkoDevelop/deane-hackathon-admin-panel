import { objectType } from 'nexus'

export const Catalog = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Catalog',
  definition(t) {
    t.int('id')
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
        orderBy: 'CategoryOrderByWithRelationInput',
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.categories
      },
    })
    t.list.field('products', {
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
        return root.products
      },
    })
    t.field('is_visible_cost', { type: 'VisibleCostEnum' })
    t.list.field('exhibitor', {
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
        return root.exhibitor
      },
    })
    t.field('author', {
      type: 'Exhibitor',
      resolve(root: any) {
        return root.author
      },
    })
    t.int('authorId')
    t.boolean('is_moderate')
    t.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
    t.field('_count', {
      type: 'CatalogCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
