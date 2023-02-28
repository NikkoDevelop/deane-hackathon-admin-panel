import { queryField, nonNull, list } from 'nexus'

export const LocationFindCountQuery = queryField('findManyLocationCount', {
  type: nonNull('Int'),
  args: {
    where: 'LocationWhereInput',
    orderBy: list('LocationOrderByWithRelationInput'),
    cursor: 'LocationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('LocationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.location.count(args as any)
  },
})
