import { queryField, list } from 'nexus'

export const LocationAggregateQuery = queryField('aggregateLocation', {
  type: 'AggregateLocation',
  args: {
    where: 'LocationWhereInput',
    orderBy: list('LocationOrderByWithRelationInput'),
    cursor: 'LocationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.location.aggregate({ ...args, ...select }) as any
  },
})
