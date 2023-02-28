import { mutationField, nonNull } from 'nexus'

export const CaseUpsertOneMutation = mutationField('upsertOneCase', {
  type: nonNull('Case'),
  args: {
    where: nonNull('CaseWhereUniqueInput'),
    create: nonNull('CaseCreateInput'),
    update: nonNull('CaseUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.case.upsert({
      ...args,
      ...select,
    })
  },
})
