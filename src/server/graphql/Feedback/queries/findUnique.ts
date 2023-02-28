import { queryField, nonNull } from 'nexus'

export const FeedbackFindUniqueQuery = queryField('findUniqueFeedback', {
  type: 'Feedback',
  args: {
    where: nonNull('FeedbackWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.feedback.findUnique({
      where,
      ...select,
    })
  },
})
