import { mutationField, nonNull } from 'nexus'

export const LocationDeleteOneMutation = mutationField('deleteOneLocation', {
  type: 'Location',
  args: {
    where: nonNull('LocationWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.location.delete({
      where,
      ...select,
    })
  },
})
