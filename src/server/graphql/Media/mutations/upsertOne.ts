import { mutationField, nonNull } from 'nexus'

export const MediaUpsertOneMutation = mutationField('upsertOneMedia', {
  type: nonNull('Media'),
  args: {
    where: nonNull('MediaWhereUniqueInput'),
    create: nonNull('MediaCreateInput'),
    update: nonNull('MediaUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.media.upsert({
      ...args,
      ...select,
    })
  },
})
