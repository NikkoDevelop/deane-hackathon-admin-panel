import { mutationField, nonNull } from 'nexus'

export const CatalogUpsertOneMutation = mutationField('upsertOneCatalog', {
  type: nonNull('Catalog'),
  args: {
    where: nonNull('CatalogWhereUniqueInput'),
    create: nonNull('CatalogCreateInput'),
    update: nonNull('CatalogUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.catalog.upsert({
      ...args,
      ...select,
    })
  },
})
