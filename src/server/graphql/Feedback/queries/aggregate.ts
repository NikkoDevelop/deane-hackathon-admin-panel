import { queryField, list } from 'nexus'

export const FeedbackAggregateQuery = queryField('aggregateFeedback', {
  type: 'AggregateFeedback',
  args: {
    where: 'FeedbackWhereInput',
    orderBy: list('FeedbackOrderByWithRelationInput'),
    cursor: 'FeedbackWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feedback.aggregate({ ...args, ...select }) as any
  },
})
