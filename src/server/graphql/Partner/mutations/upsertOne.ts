import { mutationField, nonNull } from 'nexus'

export const PartnerUpsertOneMutation = mutationField('upsertOnePartner', {
  type: nonNull('Partner'),
  args: {
    where: nonNull('PartnerWhereUniqueInput'),
    create: nonNull('PartnerCreateInput'),
    update: nonNull('PartnerUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.partner.upsert({
      ...args,
      ...select,
    })
  },
})
