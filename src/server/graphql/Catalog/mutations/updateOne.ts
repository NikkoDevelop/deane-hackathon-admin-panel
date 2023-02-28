import { mutationField, nonNull } from 'nexus'

export const CatalogUpdateOneMutation = mutationField('updateOneCatalog', {
  type: nonNull('Catalog'),
  args: {
    data: nonNull('CatalogUpdateInput'),
    where: nonNull('CatalogWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.catalog.update({
      where,
      data,
      ...select,
    })
  },
})
