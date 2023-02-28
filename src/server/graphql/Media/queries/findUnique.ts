import { queryField, nonNull } from 'nexus'

export const MediaFindUniqueQuery = queryField('findUniqueMedia', {
  type: 'Media',
  args: {
    where: nonNull('MediaWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.media.findUnique({
      where,
      ...select,
    })
  },
})
