import { queryField, nonNull, list } from 'nexus'

export const ExhibitorFindCountQuery = queryField('findManyExhibitorCount', {
  type: nonNull('Int'),
  args: {
    where: 'ExhibitorWhereInput',
    orderBy: list('ExhibitorOrderByWithRelationInput'),
    cursor: 'ExhibitorWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ExhibitorScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.exhibitor.count(args as any)
  },
})
