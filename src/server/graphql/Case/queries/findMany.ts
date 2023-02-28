import { queryField, nonNull, list } from 'nexus'

export const CaseFindManyQuery = queryField('findManyCase', {
  type: nonNull(list(nonNull('Case'))),
  args: {
    where: 'CaseWhereInput',
    orderBy: list('CaseOrderByWithRelationInput'),
    cursor: 'CaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.case.findMany({
      ...args,
      ...select,
    })
  },
})
