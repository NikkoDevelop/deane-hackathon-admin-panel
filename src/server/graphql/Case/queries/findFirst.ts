import { queryField, list } from 'nexus'

export const CaseFindFirstQuery = queryField('findFirstCase', {
  type: 'Case',
  args: {
    where: 'CaseWhereInput',
    orderBy: list('CaseOrderByWithRelationInput'),
    cursor: 'CaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.case.findFirst({
      ...args,
      ...select,
    })
  },
})
