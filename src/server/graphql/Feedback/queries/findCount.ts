import { queryField, nonNull, list } from 'nexus'

export const FeedbackFindCountQuery = queryField('findManyFeedbackCount', {
  type: nonNull('Int'),
  args: {
    where: 'FeedbackWhereInput',
    orderBy: list('FeedbackOrderByWithRelationInput'),
    cursor: 'FeedbackWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeedbackScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.feedback.count(args as any)
  },
})
