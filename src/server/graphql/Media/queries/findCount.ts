import { queryField, nonNull, list } from 'nexus'

export const MediaFindCountQuery = queryField('findManyMediaCount', {
  type: nonNull('Int'),
  args: {
    where: 'MediaWhereInput',
    orderBy: list('MediaOrderByWithRelationInput'),
    cursor: 'MediaWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MediaScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.media.count(args as any)
  },
})
