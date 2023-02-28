import { queryField, list } from 'nexus'

export const LocationFindFirstQuery = queryField('findFirstLocation', {
  type: 'Location',
  args: {
    where: 'LocationWhereInput',
    orderBy: list('LocationOrderByWithRelationInput'),
    cursor: 'LocationWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('LocationScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.location.findFirst({
      ...args,
      ...select,
    })
  },
})
