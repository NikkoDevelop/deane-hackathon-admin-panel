import { mutationField, nonNull } from 'nexus'

export const PartnerDeleteOneMutation = mutationField('deleteOnePartner', {
  type: 'Partner',
  args: {
    where: nonNull('PartnerWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.partner.delete({
      where,
      ...select,
    })
  },
})
