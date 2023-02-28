import { queryField, list } from 'nexus'

export const MediaAggregateQuery = queryField('aggregateMedia', {
  type: 'AggregateMedia',
  args: {
    where: 'MediaWhereInput',
    orderBy: list('MediaOrderByWithRelationInput'),
    cursor: 'MediaWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.media.aggregate({ ...args, ...select }) as any
  },
})
