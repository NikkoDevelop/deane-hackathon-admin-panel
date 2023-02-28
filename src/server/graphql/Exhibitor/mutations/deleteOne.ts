import { mutationField, nonNull } from 'nexus'

export const ExhibitorDeleteOneMutation = mutationField('deleteOneExhibitor', {
  type: 'Exhibitor',
  args: {
    where: nonNull('ExhibitorWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.exhibitor.delete({
      where,
      ...select,
    })
  },
})
