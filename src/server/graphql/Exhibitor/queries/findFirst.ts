import { queryField, list } from 'nexus'

export const ExhibitorFindFirstQuery = queryField('findFirstExhibitor', {
  type: 'Exhibitor',
  args: {
    where: 'ExhibitorWhereInput',
    orderBy: list('ExhibitorOrderByWithRelationInput'),
    cursor: 'ExhibitorWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExhibitorScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exhibitor.findFirst({
      ...args,
      ...select,
    })
  },
})
