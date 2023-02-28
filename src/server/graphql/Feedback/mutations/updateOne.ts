import { mutationField, nonNull } from 'nexus'

export const FeedbackUpdateOneMutation = mutationField('updateOneFeedback', {
  type: nonNull('Feedback'),
  args: {
    data: nonNull('FeedbackUpdateInput'),
    where: nonNull('FeedbackWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.feedback.update({
      where,
      data,
      ...select,
    })
  },
})
