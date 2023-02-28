import { queryField, list } from 'nexus'

export const PartnerFindFirstQuery = queryField('findFirstPartner', {
  type: 'Partner',
  args: {
    where: 'PartnerWhereInput',
    orderBy: list('PartnerOrderByWithRelationInput'),
    cursor: 'PartnerWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('PartnerScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.partner.findFirst({
      ...args,
      ...select,
    })
  },
})
