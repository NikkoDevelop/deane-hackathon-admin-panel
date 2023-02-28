import { mutationField, nonNull } from 'nexus'

export const FeedbackCreateOneMutation = mutationField('createOneFeedback', {
  type: nonNull('Feedback'),
  args: {
    data: nonNull('FeedbackCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.feedback.create({
      data,
      ...select,
    })
  },
})
