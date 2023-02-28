import { queryField, list } from 'nexus'

export const ExhibitorAggregateQuery = queryField('aggregateExhibitor', {
  type: 'AggregateExhibitor',
  args: {
    where: 'ExhibitorWhereInput',
    orderBy: list('ExhibitorOrderByWithRelationInput'),
    cursor: 'ExhibitorWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exhibitor.aggregate({ ...args, ...select }) as any
  },
})
