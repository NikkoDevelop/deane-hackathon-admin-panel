import { queryField, nonNull, list } from 'nexus'

export const FeedbackFindManyQuery = queryField('findManyFeedback', {
  type: nonNull(list(nonNull('Feedback'))),
  args: {
    where: 'FeedbackWhereInput',
    orderBy: list('FeedbackOrderByWithRelationInput'),
    cursor: 'FeedbackWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeedbackScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feedback.findMany({
      ...args,
      ...select,
    })
  },
})
