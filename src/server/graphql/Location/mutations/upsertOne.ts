import { mutationField, nonNull } from 'nexus'

export const LocationUpsertOneMutation = mutationField('upsertOneLocation', {
  type: nonNull('Location'),
  args: {
    where: nonNull('LocationWhereUniqueInput'),
    create: nonNull('LocationCreateInput'),
    update: nonNull('LocationUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.location.upsert({
      ...args,
      ...select,
    })
  },
})
