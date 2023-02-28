import { queryField, nonNull, list } from 'nexus'

export const LocationFindManyQuery = queryField('findManyLocation', {
  type: nonNull(list(nonNull('Location'))),
  args: {
    where: 'LocationWhereInput',
    orderBy: list('LocationOrderByWithRelationInput'),
    cursor: 'LocationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('LocationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.location.findMany({
      ...args,
      ...select,
    })
  },
})
