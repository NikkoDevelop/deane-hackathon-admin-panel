import { queryField, nonNull } from 'nexus'

export const ExhibitorFindUniqueQuery = queryField('findUniqueExhibitor', {
  type: 'Exhibitor',
  args: {
    where: nonNull('ExhibitorWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.exhibitor.findUnique({
      where,
      ...select,
    })
  },
})
