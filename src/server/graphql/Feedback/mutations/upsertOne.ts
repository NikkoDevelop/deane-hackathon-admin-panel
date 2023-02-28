import { mutationField, nonNull } from 'nexus'

export const FeedbackUpsertOneMutation = mutationField('upsertOneFeedback', {
  type: nonNull('Feedback'),
  args: {
    where: nonNull('FeedbackWhereUniqueInput'),
    create: nonNull('FeedbackCreateInput'),
    update: nonNull('FeedbackUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feedback.upsert({
      ...args,
      ...select,
    })
  },
})
