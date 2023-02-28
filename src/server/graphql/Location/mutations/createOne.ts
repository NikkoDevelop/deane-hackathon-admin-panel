import { mutationField, nonNull } from 'nexus'

export const LocationCreateOneMutation = mutationField('createOneLocation', {
  type: nonNull('Location'),
  args: {
    data: nonNull('LocationCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.location.create({
      data,
      ...select,
    })
  },
})
