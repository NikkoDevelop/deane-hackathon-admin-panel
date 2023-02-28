import { mutationField, nonNull } from 'nexus'

export const CaseDeleteOneMutation = mutationField('deleteOneCase', {
  type: 'Case',
  args: {
    where: nonNull('CaseWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.case.delete({
      where,
      ...select,
    })
  },
})
