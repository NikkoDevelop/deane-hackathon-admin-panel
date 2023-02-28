import { mutationField, nonNull } from 'nexus'

export const CaseDeleteManyMutation = mutationField('deleteManyCase', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CaseWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.case.deleteMany({ where } as any)
  },
})
