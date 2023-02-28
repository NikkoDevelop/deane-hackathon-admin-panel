import { queryField, nonNull, list } from 'nexus'

export const CaseFindCountQuery = queryField('findManyCaseCount', {
  type: nonNull('Int'),
  args: {
    where: 'CaseWhereInput',
    orderBy: list('CaseOrderByWithRelationInput'),
    cursor: 'CaseWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('CaseScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.case.count(args as any)
  },
})
