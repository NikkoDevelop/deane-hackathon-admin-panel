import { objectType } from 'nexus'

export const Exhibitor = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Exhibitor',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('meta_tags', { type: 'MetaTagsEnum' })
    t.field('category', { type: 'ExhibitorCategoryEnum' })
    t.nullable.string('description')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('company_description')
    t.nullable.field('logo', {
      type: 'Media',
      resolve(root: any) {
        return root.logo
      },
    })
    t.nullable.int('logoId')
    t.nullable.field('main_media', {
      type: 'Media',
      resolve(root: any) {
        return root.main_media
      },
    })
    t.nullable.int('mail_logoId')
    t.nullable.string('site_url')
    t.nullable.string('login')
    t.nullable.string('password')
    t.list.string('email')
    t.nullable.string('notification_email')
    t.nullable.string('phone')
    t.nullable.string('contact_person')
    t.nullable.string('inn')
    t.nullable.string('legal_adress')
    t.nullable.string('factory_adress')
    t.nullable.string('location_table')
    t.nullable.string('partners_table')
    t.nullable.string('clients')
    t.nullable.field('catalog', {
      type: 'Catalog',
      resolve(root: any) {
        return root.catalog
      },
    })
    t.nullable.string('portfolio')
    t.nullable.string('import_substitution')
    t.nullable.boolean('is_import_substitution')
    t.nullable.int('catalogId')
    t.list.field('our_feedback', {
      type: 'Feedback',
      args: {
        where: 'FeedbackWhereInput',
        orderBy: 'FeedbackOrderByWithRelationInput',
        cursor: 'FeedbackWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FeedbackScalarFieldEnum',
      },
      resolve(root: any) {
        return root.our_feedback
      },
    })
    t.list.field('us_feedback', {
      type: 'Feedback',
      args: {
        where: 'FeedbackWhereInput',
        orderBy: 'FeedbackOrderByWithRelationInput',
        cursor: 'FeedbackWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FeedbackScalarFieldEnum',
      },
      resolve(root: any) {
        return root.us_feedback
      },
    })
    t.nullable.int('userId')
    t.list.field('products', {
      type: 'Product',
      args: {
        where: 'ProductWhereInput',
        orderBy: 'ProductOrderByWithRelationInput',
        cursor: 'ProductWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProductScalarFieldEnum',
      },
      resolve(root: any) {
        return root.products
      },
    })
    t.list.field('locations', {
      type: 'Location',
      args: {
        where: 'LocationWhereInput',
        orderBy: 'LocationOrderByWithRelationInput',
        cursor: 'LocationWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'LocationScalarFieldEnum',
      },
      resolve(root: any) {
        return root.locations
      },
    })
    t.list.field('partners', {
      type: 'Partner',
      args: {
        where: 'PartnerWhereInput',
        orderBy: 'PartnerOrderByWithRelationInput',
        cursor: 'PartnerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PartnerScalarFieldEnum',
      },
      resolve(root: any) {
        return root.partners
      },
    })
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
        orderBy: 'CategoryOrderByWithRelationInput',
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.categories
      },
    })
    t.list.field('cases', {
      type: 'Case',
      args: {
        where: 'CaseWhereInput',
        orderBy: 'CaseOrderByWithRelationInput',
        cursor: 'CaseWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CaseScalarFieldEnum',
      },
      resolve(root: any) {
        return root.cases
      },
    })
    t.list.field('catalogs', {
      type: 'Catalog',
      args: {
        where: 'CatalogWhereInput',
        orderBy: 'CatalogOrderByWithRelationInput',
        cursor: 'CatalogWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CatalogScalarFieldEnum',
      },
      resolve(root: any) {
        return root.catalogs
      },
    })
    t.nullable.boolean('is_moderate')
    t.nullable.boolean('moderate_verdict')
    t.nullable.string('moderate_message')
    t.field('_count', {
      type: 'ExhibitorCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
