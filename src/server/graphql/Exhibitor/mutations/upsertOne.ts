import { mutationField, nonNull } from 'nexus'

export const ExhibitorUpsertOneMutation = mutationField('upsertOneExhibitor', {
  type: nonNull('Exhibitor'),
  args: {
    where: nonNull('ExhibitorWhereUniqueInput'),
    create: nonNull('ExhibitorCreateInput'),
    update: nonNull('ExhibitorUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.exhibitor.upsert({
      ...args,
      ...select,
    })
  },
})
