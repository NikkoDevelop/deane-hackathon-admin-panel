import { mutationField, nonNull } from 'nexus'

export const CatalogDeleteOneMutation = mutationField('deleteOneCatalog', {
  type: 'Catalog',
  args: {
    where: nonNull('CatalogWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.catalog.delete({
      where,
      ...select,
    })
  },
})
