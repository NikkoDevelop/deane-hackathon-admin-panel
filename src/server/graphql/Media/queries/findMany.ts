import { queryField, nonNull, list } from 'nexus'

export const MediaFindManyQuery = queryField('findManyMedia', {
  type: nonNull(list(nonNull('Media'))),
  args: {
    where: 'MediaWhereInput',
    orderBy: list('MediaOrderByWithRelationInput'),
    cursor: 'MediaWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MediaScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.media.findMany({
      ...args,
      ...select,
    })
  },
})
