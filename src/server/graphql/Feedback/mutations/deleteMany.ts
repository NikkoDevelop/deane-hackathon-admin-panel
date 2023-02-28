import { mutationField, nonNull } from 'nexus'

export const FeedbackDeleteManyMutation = mutationField('deleteManyFeedback', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'FeedbackWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.feedback.deleteMany({ where } as any)
  },
})
