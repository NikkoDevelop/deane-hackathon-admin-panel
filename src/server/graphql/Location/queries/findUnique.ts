import { queryField, nonNull } from 'nexus'

export const LocationFindUniqueQuery = queryField('findUniqueLocation', {
  type: 'Location',
  args: {
    where: nonNull('LocationWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.location.findUnique({
      where,
      ...select,
    })
  },
})
