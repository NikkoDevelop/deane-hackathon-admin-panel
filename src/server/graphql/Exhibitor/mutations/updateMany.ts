import { mutationField, nonNull } from 'nexus'

export const ExhibitorUpdateManyMutation = mutationField(
  'updateManyExhibitor',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('ExhibitorUpdateManyMutationInput'),
      where: 'ExhibitorWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.exhibitor.updateMany(args as any)
    },
  },
)
