import { mutationField, nonNull } from 'nexus'

export const CatalogUpdateManyMutation = mutationField('updateManyCatalog', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CatalogUpdateManyMutationInput'),
    where: 'CatalogWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.catalog.updateMany(args as any)
  },
})
