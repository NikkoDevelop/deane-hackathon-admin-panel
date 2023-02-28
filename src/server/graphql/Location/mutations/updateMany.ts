import { mutationField, nonNull } from 'nexus'

export const LocationUpdateManyMutation = mutationField('updateManyLocation', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('LocationUpdateManyMutationInput'),
    where: 'LocationWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.location.updateMany(args as any)
  },
})
