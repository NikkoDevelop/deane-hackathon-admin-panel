import { mutationField, nonNull } from 'nexus'

export const PartnerDeleteManyMutation = mutationField('deleteManyPartner', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'PartnerWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.partner.deleteMany({ where } as any)
  },
})
