import { mutationField, nonNull } from 'nexus'

export const CaseUpdateManyMutation = mutationField('updateManyCase', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('CaseUpdateManyMutationInput'),
    where: 'CaseWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.case.updateMany(args as any)
  },
})
