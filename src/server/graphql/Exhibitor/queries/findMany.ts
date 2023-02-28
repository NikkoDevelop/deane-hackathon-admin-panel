import { queryField, nonNull, list } from 'nexus'

export const ExhibitorFindManyQuery = queryField('findManyExhibitor', {
  type: nonNull(list(nonNull('Exhibitor'))),
  args: {
    where: 'ExhibitorWhereInput',
    orderBy: list('ExhibitorOrderByWithRelationInput'),
    cursor: 'ExhibitorWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExhibitorScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exhibitor.findMany({
      ...args,
      ...select,
    })
  },
})
