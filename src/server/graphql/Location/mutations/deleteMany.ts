import { mutationField, nonNull } from 'nexus'

export const LocationDeleteManyMutation = mutationField('deleteManyLocation', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'LocationWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.location.deleteMany({ where } as any)
  },
})
