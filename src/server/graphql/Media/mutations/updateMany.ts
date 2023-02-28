import { mutationField, nonNull } from 'nexus'

export const MediaUpdateManyMutation = mutationField('updateManyMedia', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('MediaUpdateManyMutationInput'),
    where: 'MediaWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.media.updateMany(args as any)
  },
})
