import { mutationField, nonNull } from 'nexus'

export const MediaCreateOneMutation = mutationField('createOneMedia', {
  type: nonNull('Media'),
  args: {
    data: nonNull('MediaCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.media.create({
      data,
      ...select,
    })
  },
})
