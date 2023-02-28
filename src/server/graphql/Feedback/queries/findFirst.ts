import { queryField, list } from 'nexus'

export const FeedbackFindFirstQuery = queryField('findFirstFeedback', {
  type: 'Feedback',
  args: {
    where: 'FeedbackWhereInput',
    orderBy: list('FeedbackOrderByWithRelationInput'),
    cursor: 'FeedbackWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeedbackScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feedback.findFirst({
      ...args,
      ...select,
    })
  },
})
