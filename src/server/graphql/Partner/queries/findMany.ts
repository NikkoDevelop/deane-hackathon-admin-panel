import { queryField, nonNull, list } from 'nexus'

export const PartnerFindManyQuery = queryField('findManyPartner', {
  type: nonNull(list(nonNull('Partner'))),
  args: {
    where: 'PartnerWhereInput',
    orderBy: list('PartnerOrderByWithRelationInput'),
    cursor: 'PartnerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PartnerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.partner.findMany({
      ...args,
      ...select,
    })
  },
})
