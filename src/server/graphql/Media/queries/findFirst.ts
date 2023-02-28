import { queryField, list } from 'nexus'

export const MediaFindFirstQuery = queryField('findFirstMedia', {
  type: 'Media',
  args: {
    where: 'MediaWhereInput',
    orderBy: list('MediaOrderByWithRelationInput'),
    cursor: 'MediaWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MediaScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.media.findFirst({
      ...args,
      ...select,
    })
  },
})
