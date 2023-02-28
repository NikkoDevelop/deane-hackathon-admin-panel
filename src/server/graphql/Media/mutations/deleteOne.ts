import { mutationField, nonNull } from 'nexus'

export const MediaDeleteOneMutation = mutationField('deleteOneMedia', {
  type: 'Media',
  args: {
    where: nonNull('MediaWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.media.delete({
      where,
      ...select,
    })
  },
})
