import { mutationField, nonNull } from 'nexus'

export const ExhibitorCreateOneMutation = mutationField('createOneExhibitor', {
  type: nonNull('Exhibitor'),
  args: {
    data: nonNull('ExhibitorCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.exhibitor.create({
      data,
      ...select,
    })
  },
})
