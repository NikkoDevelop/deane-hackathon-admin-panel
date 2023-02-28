import { mutationField, nonNull } from 'nexus'

export const PartnerCreateOneMutation = mutationField('createOnePartner', {
  type: nonNull('Partner'),
  args: {
    data: nonNull('PartnerCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.partner.create({
      data,
      ...select,
    })
  },
})
