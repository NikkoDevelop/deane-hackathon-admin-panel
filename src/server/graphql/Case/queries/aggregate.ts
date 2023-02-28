import { queryField, list } from 'nexus'

export const CaseAggregateQuery = queryField('aggregateCase', {
  type: 'AggregateCase',
  args: {
    where: 'CaseWhereInput',
    orderBy: list('CaseOrderByWithRelationInput'),
    cursor: 'CaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.case.aggregate({ ...args, ...select }) as any
  },
})
