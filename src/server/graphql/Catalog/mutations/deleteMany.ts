import { mutationField, nonNull } from 'nexus'

export const CatalogDeleteManyMutation = mutationField('deleteManyCatalog', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CatalogWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.catalog.deleteMany({ where } as any)
  },
})
