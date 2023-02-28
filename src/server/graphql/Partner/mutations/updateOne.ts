import { mutationField, nonNull } from 'nexus'

export const PartnerUpdateOneMutation = mutationField('updateOnePartner', {
  type: nonNull('Partner'),
  args: {
    data: nonNull('PartnerUpdateInput'),
    where: nonNull('PartnerWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.partner.update({
      where,
      data,
      ...select,
    })
  },
})
