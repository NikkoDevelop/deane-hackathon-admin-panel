import { queryField, list } from 'nexus'

export const PartnerAggregateQuery = queryField('aggregatePartner', {
  type: 'AggregatePartner',
  args: {
    where: 'PartnerWhereInput',
    orderBy: list('PartnerOrderByWithRelationInput'),
    cursor: 'PartnerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.partner.aggregate({ ...args, ...select }) as any
  },
})
