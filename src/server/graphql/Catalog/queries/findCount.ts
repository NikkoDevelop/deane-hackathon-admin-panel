import { queryField, nonNull, list } from 'nexus'

export const CatalogFindCountQuery = queryField('findManyCatalogCount', {
  type: nonNull('Int'),
  args: {
    where: 'CatalogWhereInput',
    orderBy: list('CatalogOrderByWithRelationInput'),
    cursor: 'CatalogWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CatalogScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.catalog.count(args as any)
  },
})
