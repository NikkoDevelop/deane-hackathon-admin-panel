import { mutationField, nonNull } from 'nexus'

export const ExhibitorUpdateOneMutation = mutationField('updateOneExhibitor', {
  type: nonNull('Exhibitor'),
  args: {
    data: nonNull('ExhibitorUpdateInput'),
    where: nonNull('ExhibitorWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.exhibitor.update({
      where,
      data,
      ...select,
    })
  },
})
