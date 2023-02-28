import { mutationField, nonNull } from 'nexus'

export const CatalogCreateOneMutation = mutationField('createOneCatalog', {
  type: nonNull('Catalog'),
  args: {
    data: nonNull('CatalogCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.catalog.create({
      data,
      ...select,
    })
  },
})
