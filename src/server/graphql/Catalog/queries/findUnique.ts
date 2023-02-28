import { queryField, nonNull } from 'nexus'

export const CatalogFindUniqueQuery = queryField('findUniqueCatalog', {
  type: 'Catalog',
  args: {
    where: nonNull('CatalogWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.catalog.findUnique({
      where,
      ...select,
    })
  },
})
