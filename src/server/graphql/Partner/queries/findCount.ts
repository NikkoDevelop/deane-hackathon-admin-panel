import { queryField, nonNull, list } from 'nexus'

export const PartnerFindCountQuery = queryField('findManyPartnerCount', {
  type: nonNull('Int'),
  args: {
    where: 'PartnerWhereInput',
    orderBy: list('PartnerOrderByWithRelationInput'),
    cursor: 'PartnerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PartnerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.partner.count(args as any)
  },
})
