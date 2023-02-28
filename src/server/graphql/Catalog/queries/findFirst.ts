import { queryField, list } from 'nexus'

export const CatalogFindFirstQuery = queryField('findFirstCatalog', {
  type: 'Catalog',
  args: {
    where: 'CatalogWhereInput',
    orderBy: list('CatalogOrderByWithRelationInput'),
    cursor: 'CatalogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CatalogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.catalog.findFirst({
      ...args,
      ...select,
    })
  },
})
