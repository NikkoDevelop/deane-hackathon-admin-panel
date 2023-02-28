import { queryField, list } from 'nexus'

export const CatalogAggregateQuery = queryField('aggregateCatalog', {
  type: 'AggregateCatalog',
  args: {
    where: 'CatalogWhereInput',
    orderBy: list('CatalogOrderByWithRelationInput'),
    cursor: 'CatalogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.catalog.aggregate({ ...args, ...select }) as any
  },
})
