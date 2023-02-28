import { mutationField, nonNull } from 'nexus'

export const FeedbackUpdateManyMutation = mutationField('updateManyFeedback', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('FeedbackUpdateManyMutationInput'),
    where: 'FeedbackWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.feedback.updateMany(args as any)
  },
})
