import { mutationField, nonNull } from 'nexus'

export const CaseUpdateOneMutation = mutationField('updateOneCase', {
  type: nonNull('Case'),
  args: {
    data: nonNull('CaseUpdateInput'),
    where: nonNull('CaseWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.case.update({
      where,
      data,
      ...select,
    })
  },
})
