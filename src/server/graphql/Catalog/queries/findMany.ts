import { queryField, nonNull, list } from 'nexus'

export const CatalogFindManyQuery = queryField('findManyCatalog', {
  type: nonNull(list(nonNull('Catalog'))),
  args: {
    where: 'CatalogWhereInput',
    orderBy: list('CatalogOrderByWithRelationInput'),
    cursor: 'CatalogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CatalogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.catalog.findMany({
      ...args,
      ...select,
    })
  },
})
