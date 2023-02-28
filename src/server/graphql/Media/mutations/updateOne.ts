import { mutationField, nonNull } from 'nexus'

export const MediaUpdateOneMutation = mutationField('updateOneMedia', {
  type: nonNull('Media'),
  args: {
    data: nonNull('MediaUpdateInput'),
    where: nonNull('MediaWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.media.update({
      where,
      data,
      ...select,
    })
  },
})
