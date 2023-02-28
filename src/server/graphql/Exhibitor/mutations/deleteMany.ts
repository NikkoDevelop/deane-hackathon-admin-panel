import { mutationField, nonNull } from 'nexus'

export const ExhibitorDeleteManyMutation = mutationField(
  'deleteManyExhibitor',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ExhibitorWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.exhibitor.deleteMany({ where } as any)
    },
  },
)
