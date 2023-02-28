import { queryField, nonNull } from 'nexus'

export const CaseFindUniqueQuery = queryField('findUniqueCase', {
  type: 'Case',
  args: {
    where: nonNull('CaseWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.case.findUnique({
      where,
      ...select,
    })
  },
})
