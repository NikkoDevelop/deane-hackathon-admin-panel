import { mutationField, nonNull } from 'nexus'

export const CaseCreateOneMutation = mutationField('createOneCase', {
  type: nonNull('Case'),
  args: {
    data: nonNull('CaseCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.case.create({
      data,
      ...select,
    })
  },
})
