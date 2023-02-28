import { mutationField, nonNull } from 'nexus'

export const FeedbackDeleteOneMutation = mutationField('deleteOneFeedback', {
  type: 'Feedback',
  args: {
    where: nonNull('FeedbackWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.feedback.delete({
      where,
      ...select,
    })
  },
})
