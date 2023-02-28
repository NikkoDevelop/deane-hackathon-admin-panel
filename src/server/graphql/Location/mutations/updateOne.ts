import { mutationField, nonNull } from 'nexus'

export const LocationUpdateOneMutation = mutationField('updateOneLocation', {
  type: nonNull('Location'),
  args: {
    data: nonNull('LocationUpdateInput'),
    where: nonNull('LocationWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.location.update({
      where,
      data,
      ...select,
    })
  },
})
