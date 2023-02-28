import { mutationField, nonNull } from 'nexus'

export const PartnerUpdateManyMutation = mutationField('updateManyPartner', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('PartnerUpdateManyMutationInput'),
    where: 'PartnerWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.partner.updateMany(args as any)
  },
})
