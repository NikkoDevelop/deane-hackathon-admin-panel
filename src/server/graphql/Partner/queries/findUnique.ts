import { queryField, nonNull } from 'nexus'

export const PartnerFindUniqueQuery = queryField('findUniquePartner', {
  type: 'Partner',
  args: {
    where: nonNull('PartnerWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.partner.findUnique({
      where,
      ...select,
    })
  },
})
