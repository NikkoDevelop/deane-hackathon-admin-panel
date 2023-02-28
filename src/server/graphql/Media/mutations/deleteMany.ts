import { mutationField, nonNull } from 'nexus'

export const MediaDeleteManyMutation = mutationField('deleteManyMedia', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'MediaWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.media.deleteMany({ where } as any)
  },
})
