import { gql } from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateCase = {
  __typename?: 'AggregateCase';
  _avg?: Maybe<CaseAvgAggregateOutputType>;
  _count?: Maybe<CaseCountAggregateOutputType>;
  _max?: Maybe<CaseMaxAggregateOutputType>;
  _min?: Maybe<CaseMinAggregateOutputType>;
  _sum?: Maybe<CaseSumAggregateOutputType>;
};

export type AggregateCatalog = {
  __typename?: 'AggregateCatalog';
  _avg?: Maybe<CatalogAvgAggregateOutputType>;
  _count?: Maybe<CatalogCountAggregateOutputType>;
  _max?: Maybe<CatalogMaxAggregateOutputType>;
  _min?: Maybe<CatalogMinAggregateOutputType>;
  _sum?: Maybe<CatalogSumAggregateOutputType>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregateOutputType>;
  _count?: Maybe<CategoryCountAggregateOutputType>;
  _max?: Maybe<CategoryMaxAggregateOutputType>;
  _min?: Maybe<CategoryMinAggregateOutputType>;
  _sum?: Maybe<CategorySumAggregateOutputType>;
};

export type AggregateExhibitor = {
  __typename?: 'AggregateExhibitor';
  _avg?: Maybe<ExhibitorAvgAggregateOutputType>;
  _count?: Maybe<ExhibitorCountAggregateOutputType>;
  _max?: Maybe<ExhibitorMaxAggregateOutputType>;
  _min?: Maybe<ExhibitorMinAggregateOutputType>;
  _sum?: Maybe<ExhibitorSumAggregateOutputType>;
};

export type AggregateFeedback = {
  __typename?: 'AggregateFeedback';
  _avg?: Maybe<FeedbackAvgAggregateOutputType>;
  _count?: Maybe<FeedbackCountAggregateOutputType>;
  _max?: Maybe<FeedbackMaxAggregateOutputType>;
  _min?: Maybe<FeedbackMinAggregateOutputType>;
  _sum?: Maybe<FeedbackSumAggregateOutputType>;
};

export type AggregateLocation = {
  __typename?: 'AggregateLocation';
  _avg?: Maybe<LocationAvgAggregateOutputType>;
  _count?: Maybe<LocationCountAggregateOutputType>;
  _max?: Maybe<LocationMaxAggregateOutputType>;
  _min?: Maybe<LocationMinAggregateOutputType>;
  _sum?: Maybe<LocationSumAggregateOutputType>;
};

export type AggregateMedia = {
  __typename?: 'AggregateMedia';
  _avg?: Maybe<MediaAvgAggregateOutputType>;
  _count?: Maybe<MediaCountAggregateOutputType>;
  _max?: Maybe<MediaMaxAggregateOutputType>;
  _min?: Maybe<MediaMinAggregateOutputType>;
  _sum?: Maybe<MediaSumAggregateOutputType>;
};

export type AggregatePartner = {
  __typename?: 'AggregatePartner';
  _avg?: Maybe<PartnerAvgAggregateOutputType>;
  _count?: Maybe<PartnerCountAggregateOutputType>;
  _max?: Maybe<PartnerMaxAggregateOutputType>;
  _min?: Maybe<PartnerMinAggregateOutputType>;
  _sum?: Maybe<PartnerSumAggregateOutputType>;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _avg?: Maybe<ProductAvgAggregateOutputType>;
  _count?: Maybe<ProductCountAggregateOutputType>;
  _max?: Maybe<ProductMaxAggregateOutputType>;
  _min?: Maybe<ProductMinAggregateOutputType>;
  _sum?: Maybe<ProductSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type Case = {
  __typename?: 'Case';
  content_type?: Maybe<MediaType>;
  createdAt: Scalars['DateTime'];
  exhibitor?: Maybe<Exhibitor>;
  exhibitorId?: Maybe<Scalars['Int']>;
  html_content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate: Scalars['Boolean'];
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video_url?: Maybe<Scalars['String']>;
};

export type CaseAvgAggregateOutputType = {
  __typename?: 'CaseAvgAggregateOutputType';
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CaseAvgOrderByAggregateInput = {
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CaseCountAggregateOutputType = {
  __typename?: 'CaseCountAggregateOutputType';
  _all: Scalars['Int'];
  content_type: Scalars['Int'];
  createdAt: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  html_content: Scalars['Int'];
  id: Scalars['Int'];
  is_import_substitution: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_published: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  partner_site_url: Scalars['Int'];
  updatedAt: Scalars['Int'];
  video_url: Scalars['Int'];
};

export type CaseCountOrderByAggregateInput = {
  content_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  html_content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video_url?: Maybe<SortOrder>;
};

export type CaseCreateInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutCasesInput>;
  html_content?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseCreateManyExhibitorInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseCreateManyExhibitorInputEnvelope = {
  data: CaseCreateManyExhibitorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CaseCreateManyInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CaseCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CaseCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CaseCreateManyExhibitorInputEnvelope>;
};

export type CaseCreateOrConnectWithoutExhibitorInput = {
  create: CaseUncheckedCreateWithoutExhibitorInput;
  where: CaseWhereUniqueInput;
};

export type CaseCreateWithoutExhibitorInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  html_content?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseListRelationFilter = {
  every?: Maybe<CaseWhereInput>;
  none?: Maybe<CaseWhereInput>;
  some?: Maybe<CaseWhereInput>;
};

export type CaseMaxAggregateOutputType = {
  __typename?: 'CaseMaxAggregateOutputType';
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseMaxOrderByAggregateInput = {
  content_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  html_content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video_url?: Maybe<SortOrder>;
};

export type CaseMinAggregateOutputType = {
  __typename?: 'CaseMinAggregateOutputType';
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseMinOrderByAggregateInput = {
  content_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  html_content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video_url?: Maybe<SortOrder>;
};

export type CaseOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type CaseOrderByWithAggregationInput = {
  _avg?: Maybe<CaseAvgOrderByAggregateInput>;
  _count?: Maybe<CaseCountOrderByAggregateInput>;
  _max?: Maybe<CaseMaxOrderByAggregateInput>;
  _min?: Maybe<CaseMinOrderByAggregateInput>;
  _sum?: Maybe<CaseSumOrderByAggregateInput>;
  content_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  html_content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video_url?: Maybe<SortOrder>;
};

export type CaseOrderByWithRelationInput = {
  content_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  exhibitorId?: Maybe<SortOrder>;
  html_content?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video_url?: Maybe<SortOrder>;
};

export enum CaseScalarFieldEnum {
  ContentType = 'content_type',
  CreatedAt = 'createdAt',
  ExhibitorId = 'exhibitorId',
  HtmlContent = 'html_content',
  Id = 'id',
  IsImportSubstitution = 'is_import_substitution',
  IsModerate = 'is_moderate',
  IsPublished = 'is_published',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  PartnerSiteUrl = 'partner_site_url',
  UpdatedAt = 'updatedAt',
  VideoUrl = 'video_url'
}

export type CaseScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CaseScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CaseScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CaseScalarWhereInput>>>;
  content_type?: Maybe<EnumMediaTypeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitorId?: Maybe<IntNullableFilter>;
  html_content?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  partner_site_url?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  video_url?: Maybe<StringNullableFilter>;
};

export type CaseScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CaseScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CaseScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CaseScalarWhereWithAggregatesInput>>>;
  content_type?: Maybe<EnumMediaTypeNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  exhibitorId?: Maybe<IntNullableWithAggregatesFilter>;
  html_content?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_import_substitution?: Maybe<BoolNullableWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_published?: Maybe<BoolNullableWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  partner_site_url?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  video_url?: Maybe<StringNullableWithAggregatesFilter>;
};

export type CaseSumAggregateOutputType = {
  __typename?: 'CaseSumAggregateOutputType';
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CaseSumOrderByAggregateInput = {
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CaseUncheckedCreateInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseUncheckedCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CaseCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CaseCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CaseCreateManyExhibitorInputEnvelope>;
};

export type CaseUncheckedCreateWithoutExhibitorInput = {
  content_type?: Maybe<MediaType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  html_content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner_site_url?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video_url?: Maybe<Scalars['String']>;
};

export type CaseUncheckedUpdateInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUncheckedUpdateManyInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUncheckedUpdateManyWithoutCasesInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUncheckedUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CaseCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CaseCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CaseCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CaseUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<CaseUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<CaseUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type CaseUncheckedUpdateWithoutExhibitorInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUpdateInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutCasesInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUpdateManyMutationInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUpdateManyWithWhereWithoutExhibitorInput = {
  data: CaseUncheckedUpdateManyWithoutCasesInput;
  where: CaseScalarWhereInput;
};

export type CaseUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CaseCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CaseCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CaseCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CaseScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CaseWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CaseUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<CaseUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<CaseUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type CaseUpdateWithWhereUniqueWithoutExhibitorInput = {
  data: CaseUncheckedUpdateWithoutExhibitorInput;
  where: CaseWhereUniqueInput;
};

export type CaseUpdateWithoutExhibitorInput = {
  content_type?: Maybe<NullableEnumMediaTypeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  html_content?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CaseUpsertWithWhereUniqueWithoutExhibitorInput = {
  create: CaseUncheckedCreateWithoutExhibitorInput;
  update: CaseUncheckedUpdateWithoutExhibitorInput;
  where: CaseWhereUniqueInput;
};

export type CaseWhereInput = {
  AND?: Maybe<Array<Maybe<CaseWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CaseWhereInput>>>;
  OR?: Maybe<Array<Maybe<CaseWhereInput>>>;
  content_type?: Maybe<EnumMediaTypeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  exhibitorId?: Maybe<IntNullableFilter>;
  html_content?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  partner_site_url?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  video_url?: Maybe<StringNullableFilter>;
};

export type CaseWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Catalog = {
  __typename?: 'Catalog';
  _count: CatalogCountOutputType;
  author: Exhibitor;
  authorId: Scalars['Int'];
  categories: Array<Category>;
  exhibitor: Array<Exhibitor>;
  id: Scalars['Int'];
  is_moderate: Scalars['Boolean'];
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  products: Array<Product>;
};


export type CatalogCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  orderBy?: Maybe<CategoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type CatalogExhibitorArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<ExhibitorScalarFieldEnum>;
  orderBy?: Maybe<ExhibitorOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type CatalogProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};

export type CatalogAvgAggregateOutputType = {
  __typename?: 'CatalogAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type CatalogAvgOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CatalogCountAggregateOutputType = {
  __typename?: 'CatalogCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_visible_cost: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
};

export type CatalogCountOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible_cost?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
};

export type CatalogCountOutputType = {
  __typename?: 'CatalogCountOutputType';
  categories: Scalars['Int'];
  exhibitor: Scalars['Int'];
  products: Scalars['Int'];
};

export type CatalogCreateInput = {
  author: ExhibitorCreateNestedOneWithoutCatalogsInput;
  categories?: Maybe<CategoryCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorCreateNestedManyWithoutCatalogInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductCreateNestedManyWithoutCatalogInput>;
};

export type CatalogCreateManyAuthorInput = {
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogCreateManyAuthorInputEnvelope = {
  data: CatalogCreateManyAuthorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CatalogCreateManyInput = {
  authorId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CatalogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CatalogCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CatalogCreateManyAuthorInputEnvelope>;
};

export type CatalogCreateNestedOneWithoutCategoriesInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutCategoriesInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutCategoriesInput>;
};

export type CatalogCreateNestedOneWithoutExhibitorInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutExhibitorInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutExhibitorInput>;
};

export type CatalogCreateNestedOneWithoutProductsInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutProductsInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutProductsInput>;
};

export type CatalogCreateOrConnectWithoutAuthorInput = {
  create: CatalogUncheckedCreateWithoutAuthorInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogCreateOrConnectWithoutCategoriesInput = {
  create: CatalogUncheckedCreateWithoutCategoriesInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogCreateOrConnectWithoutExhibitorInput = {
  create: CatalogUncheckedCreateWithoutExhibitorInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogCreateOrConnectWithoutProductsInput = {
  create: CatalogUncheckedCreateWithoutProductsInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogCreateWithoutAuthorInput = {
  categories?: Maybe<CategoryCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorCreateNestedManyWithoutCatalogInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductCreateNestedManyWithoutCatalogInput>;
};

export type CatalogCreateWithoutCategoriesInput = {
  author: ExhibitorCreateNestedOneWithoutCatalogsInput;
  exhibitor?: Maybe<ExhibitorCreateNestedManyWithoutCatalogInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductCreateNestedManyWithoutCatalogInput>;
};

export type CatalogCreateWithoutExhibitorInput = {
  author: ExhibitorCreateNestedOneWithoutCatalogsInput;
  categories?: Maybe<CategoryCreateNestedManyWithoutCatalogInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductCreateNestedManyWithoutCatalogInput>;
};

export type CatalogCreateWithoutProductsInput = {
  author: ExhibitorCreateNestedOneWithoutCatalogsInput;
  categories?: Maybe<CategoryCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorCreateNestedManyWithoutCatalogInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogListRelationFilter = {
  every?: Maybe<CatalogWhereInput>;
  none?: Maybe<CatalogWhereInput>;
  some?: Maybe<CatalogWhereInput>;
};

export type CatalogMaxAggregateOutputType = {
  __typename?: 'CatalogMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost?: Maybe<VisibleCostEnum>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogMaxOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible_cost?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
};

export type CatalogMinAggregateOutputType = {
  __typename?: 'CatalogMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost?: Maybe<VisibleCostEnum>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogMinOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible_cost?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
};

export type CatalogOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type CatalogOrderByWithAggregationInput = {
  _avg?: Maybe<CatalogAvgOrderByAggregateInput>;
  _count?: Maybe<CatalogCountOrderByAggregateInput>;
  _max?: Maybe<CatalogMaxOrderByAggregateInput>;
  _min?: Maybe<CatalogMinOrderByAggregateInput>;
  _sum?: Maybe<CatalogSumOrderByAggregateInput>;
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible_cost?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
};

export type CatalogOrderByWithRelationInput = {
  author?: Maybe<ExhibitorOrderByWithRelationInput>;
  authorId?: Maybe<SortOrder>;
  categories?: Maybe<CategoryOrderByRelationAggregateInput>;
  exhibitor?: Maybe<ExhibitorOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible_cost?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  products?: Maybe<ProductOrderByRelationAggregateInput>;
};

export type CatalogRelationFilter = {
  is?: Maybe<CatalogWhereInput>;
  isNot?: Maybe<CatalogWhereInput>;
};

export enum CatalogScalarFieldEnum {
  AuthorId = 'authorId',
  Id = 'id',
  IsModerate = 'is_moderate',
  IsVisibleCost = 'is_visible_cost',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict'
}

export type CatalogScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CatalogScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CatalogScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CatalogScalarWhereInput>>>;
  authorId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
};

export type CatalogScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CatalogScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CatalogScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CatalogScalarWhereWithAggregatesInput>>>;
  authorId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
};

export type CatalogSumAggregateOutputType = {
  __typename?: 'CatalogSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type CatalogSumOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CatalogUncheckedCreateInput = {
  authorId: Scalars['Int'];
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutCatalogInput>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutCatalogInput>;
};

export type CatalogUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CatalogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CatalogCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CatalogCreateManyAuthorInputEnvelope>;
};

export type CatalogUncheckedCreateWithoutAuthorInput = {
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutCatalogInput>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutCatalogInput>;
};

export type CatalogUncheckedCreateWithoutCategoriesInput = {
  authorId: Scalars['Int'];
  exhibitor?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutCatalogInput>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutCatalogInput>;
};

export type CatalogUncheckedCreateWithoutExhibitorInput = {
  authorId: Scalars['Int'];
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutCatalogInput>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutCatalogInput>;
};

export type CatalogUncheckedCreateWithoutProductsInput = {
  authorId: Scalars['Int'];
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutCatalogInput>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible_cost: VisibleCostEnum;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
};

export type CatalogUncheckedUpdateInput = {
  authorId?: Maybe<IntFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedUpdateManyWithoutCatalogInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutCatalogInput>;
};

export type CatalogUncheckedUpdateManyInput = {
  authorId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CatalogUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CatalogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CatalogCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CatalogCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CatalogScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CatalogUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CatalogUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CatalogUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CatalogUncheckedUpdateManyWithoutCatalogsInput = {
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CatalogUncheckedUpdateWithoutAuthorInput = {
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedUpdateManyWithoutCatalogInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutCatalogInput>;
};

export type CatalogUncheckedUpdateWithoutCategoriesInput = {
  authorId?: Maybe<IntFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUncheckedUpdateManyWithoutCatalogInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutCatalogInput>;
};

export type CatalogUncheckedUpdateWithoutExhibitorInput = {
  authorId?: Maybe<IntFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutCatalogInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutCatalogInput>;
};

export type CatalogUncheckedUpdateWithoutProductsInput = {
  authorId?: Maybe<IntFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUncheckedUpdateManyWithoutCatalogInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CatalogUpdateInput = {
  author?: Maybe<ExhibitorUpdateOneRequiredWithoutCatalogsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUpdateManyWithoutCatalogInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCatalogInput>;
};

export type CatalogUpdateManyMutationInput = {
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CatalogUpdateManyWithWhereWithoutAuthorInput = {
  data: CatalogUncheckedUpdateManyWithoutCatalogsInput;
  where: CatalogScalarWhereInput;
};

export type CatalogUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CatalogCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<CatalogCreateWithoutAuthorInput>>>;
  createMany?: Maybe<CatalogCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CatalogScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CatalogWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CatalogUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CatalogUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CatalogUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CatalogUpdateOneWithoutCategoriesInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutCategoriesInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutCategoriesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CatalogUncheckedUpdateWithoutCategoriesInput>;
  upsert?: Maybe<CatalogUpsertWithoutCategoriesInput>;
};

export type CatalogUpdateOneWithoutExhibitorInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutExhibitorInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutExhibitorInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CatalogUncheckedUpdateWithoutExhibitorInput>;
  upsert?: Maybe<CatalogUpsertWithoutExhibitorInput>;
};

export type CatalogUpdateOneWithoutProductsInput = {
  connect?: Maybe<CatalogWhereUniqueInput>;
  connectOrCreate?: Maybe<CatalogCreateOrConnectWithoutProductsInput>;
  create?: Maybe<CatalogUncheckedCreateWithoutProductsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CatalogUncheckedUpdateWithoutProductsInput>;
  upsert?: Maybe<CatalogUpsertWithoutProductsInput>;
};

export type CatalogUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CatalogUncheckedUpdateWithoutAuthorInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogUpdateWithoutAuthorInput = {
  categories?: Maybe<CategoryUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUpdateManyWithoutCatalogInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCatalogInput>;
};

export type CatalogUpdateWithoutCategoriesInput = {
  author?: Maybe<ExhibitorUpdateOneRequiredWithoutCatalogsInput>;
  exhibitor?: Maybe<ExhibitorUpdateManyWithoutCatalogInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCatalogInput>;
};

export type CatalogUpdateWithoutExhibitorInput = {
  author?: Maybe<ExhibitorUpdateOneRequiredWithoutCatalogsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCatalogInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutCatalogInput>;
};

export type CatalogUpdateWithoutProductsInput = {
  author?: Maybe<ExhibitorUpdateOneRequiredWithoutCatalogsInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCatalogInput>;
  exhibitor?: Maybe<ExhibitorUpdateManyWithoutCatalogInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type CatalogUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CatalogUncheckedCreateWithoutAuthorInput;
  update: CatalogUncheckedUpdateWithoutAuthorInput;
  where: CatalogWhereUniqueInput;
};

export type CatalogUpsertWithoutCategoriesInput = {
  create: CatalogUncheckedCreateWithoutCategoriesInput;
  update: CatalogUncheckedUpdateWithoutCategoriesInput;
};

export type CatalogUpsertWithoutExhibitorInput = {
  create: CatalogUncheckedCreateWithoutExhibitorInput;
  update: CatalogUncheckedUpdateWithoutExhibitorInput;
};

export type CatalogUpsertWithoutProductsInput = {
  create: CatalogUncheckedCreateWithoutProductsInput;
  update: CatalogUncheckedUpdateWithoutProductsInput;
};

export type CatalogWhereInput = {
  AND?: Maybe<Array<Maybe<CatalogWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CatalogWhereInput>>>;
  OR?: Maybe<Array<Maybe<CatalogWhereInput>>>;
  author?: Maybe<ExhibitorWhereInput>;
  authorId?: Maybe<IntFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  exhibitor?: Maybe<ExhibitorListRelationFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_visible_cost?: Maybe<EnumVisibleCostEnumFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  products?: Maybe<ProductListRelationFilter>;
};

export type CatalogWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCountOutputType;
  catalog?: Maybe<Catalog>;
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt: Scalars['DateTime'];
  exhibitor?: Maybe<Exhibitor>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_moderate: Scalars['Boolean'];
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  product: Array<Product>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type CategoryProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};

export type CategoryAvgAggregateOutputType = {
  __typename?: 'CategoryAvgAggregateOutputType';
  catalogId?: Maybe<Scalars['Float']>;
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sub_category?: Maybe<Scalars['Float']>;
};

export type CategoryAvgOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
};

export type CategoryCountAggregateOutputType = {
  __typename?: 'CategoryCountAggregateOutputType';
  _all: Scalars['Int'];
  catalogId: Scalars['Int'];
  connection_type: Scalars['Int'];
  createdAt: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_published: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  name: Scalars['Int'];
  sub_category: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  connection_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryCountOutputType = {
  __typename?: 'CategoryCountOutputType';
  product: Scalars['Int'];
};

export type CategoryCreateInput = {
  catalog?: Maybe<CatalogCreateNestedOneWithoutCategoriesInput>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutCategoriesInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyCatalogInput = {
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyCatalogInputEnvelope = {
  data: CategoryCreateManyCatalogInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryCreateManyExhibitorInput = {
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyExhibitorInputEnvelope = {
  data: CategoryCreateManyExhibitorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CategoryCreateManyInput = {
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutCatalogInput>>>;
  createMany?: Maybe<CategoryCreateManyCatalogInputEnvelope>;
};

export type CategoryCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CategoryCreateManyExhibitorInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutProductInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductInput>;
  create?: Maybe<CategoryUncheckedCreateWithoutProductInput>;
};

export type CategoryCreateOrConnectWithoutCatalogInput = {
  create: CategoryUncheckedCreateWithoutCatalogInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutExhibitorInput = {
  create: CategoryUncheckedCreateWithoutExhibitorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutProductInput = {
  create: CategoryUncheckedCreateWithoutProductInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutCatalogInput = {
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutCategoriesInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateWithoutExhibitorInput = {
  catalog?: Maybe<CatalogCreateNestedOneWithoutCategoriesInput>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateWithoutProductInput = {
  catalog?: Maybe<CatalogCreateNestedOneWithoutCategoriesInput>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutCategoriesInput>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryListRelationFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryMaxAggregateOutputType = {
  __typename?: 'CategoryMaxAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryMaxOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  connection_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryMinAggregateOutputType = {
  __typename?: 'CategoryMinAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryMinOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  connection_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: Maybe<CategoryAvgOrderByAggregateInput>;
  _count?: Maybe<CategoryCountOrderByAggregateInput>;
  _max?: Maybe<CategoryMaxOrderByAggregateInput>;
  _min?: Maybe<CategoryMinOrderByAggregateInput>;
  _sum?: Maybe<CategorySumOrderByAggregateInput>;
  catalogId?: Maybe<SortOrder>;
  connection_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  catalog?: Maybe<CatalogOrderByWithRelationInput>;
  catalogId?: Maybe<SortOrder>;
  connection_type?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  product?: Maybe<ProductOrderByRelationAggregateInput>;
  sub_category?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: Maybe<CategoryWhereInput>;
  isNot?: Maybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CatalogId = 'catalogId',
  ConnectionType = 'connection_type',
  CreatedAt = 'createdAt',
  ExhibitorId = 'exhibitorId',
  Id = 'id',
  IsModerate = 'is_moderate',
  IsPublished = 'is_published',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Name = 'name',
  SubCategory = 'sub_category',
  UpdatedAt = 'updatedAt'
}

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  catalogId?: Maybe<IntNullableFilter>;
  connection_type?: Maybe<EnumConnectionTypeEnumNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  sub_category?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<CategoryScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<CategoryScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<CategoryScalarWhereWithAggregatesInput>>>;
  catalogId?: Maybe<IntNullableWithAggregatesFilter>;
  connection_type?: Maybe<EnumConnectionTypeEnumNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  exhibitorId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_published?: Maybe<BoolNullableWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  sub_category?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type CategorySumAggregateOutputType = {
  __typename?: 'CategorySumAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sub_category?: Maybe<Scalars['Int']>;
};

export type CategorySumOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sub_category?: Maybe<SortOrder>;
};

export type CategoryUncheckedCreateInput = {
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUncheckedCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUncheckedCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutCatalogInput>>>;
  createMany?: Maybe<CategoryCreateManyCatalogInputEnvelope>;
};

export type CategoryUncheckedCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CategoryCreateManyExhibitorInputEnvelope>;
};

export type CategoryUncheckedCreateWithoutCatalogInput = {
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUncheckedCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUncheckedCreateWithoutExhibitorInput = {
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<ProductUncheckedCreateNestedManyWithoutCategoryInput>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUncheckedCreateWithoutProductInput = {
  catalogId?: Maybe<Scalars['Int']>;
  connection_type?: Maybe<ConnectionTypeEnum>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sub_category?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryUncheckedUpdateInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUncheckedUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutCatalogInput>>>;
  createMany?: Maybe<CategoryCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CategoryUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<CategoryUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<CategoryUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type CategoryUncheckedUpdateManyWithoutCategoriesInput = {
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CategoryCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CategoryUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<CategoryUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<CategoryUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type CategoryUncheckedUpdateWithoutCatalogInput = {
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUncheckedUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateWithoutExhibitorInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUncheckedUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateWithoutProductInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateInput = {
  catalog?: Maybe<CatalogUpdateOneWithoutCategoriesInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutCategoriesInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutCatalogInput = {
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithWhereWithoutExhibitorInput = {
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutCatalogInput>>>;
  createMany?: Maybe<CategoryCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CategoryUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<CategoryUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<CategoryUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type CategoryUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CategoryCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<CategoryCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<CategoryCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CategoryScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CategoryWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CategoryUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<CategoryUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<CategoryUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type CategoryUpdateOneWithoutProductInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutProductInput>;
  create?: Maybe<CategoryUncheckedCreateWithoutProductInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CategoryUncheckedUpdateWithoutProductInput>;
  upsert?: Maybe<CategoryUpsertWithoutProductInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutCatalogInput = {
  data: CategoryUncheckedUpdateWithoutCatalogInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutExhibitorInput = {
  data: CategoryUncheckedUpdateWithoutExhibitorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutCatalogInput = {
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutCategoriesInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutExhibitorInput = {
  catalog?: Maybe<CatalogUpdateOneWithoutCategoriesInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  product?: Maybe<ProductUpdateManyWithoutCategoryInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutProductInput = {
  catalog?: Maybe<CatalogUpdateOneWithoutCategoriesInput>;
  connection_type?: Maybe<NullableEnumConnectionTypeEnumFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutCategoriesInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  sub_category?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutCatalogInput = {
  create: CategoryUncheckedCreateWithoutCatalogInput;
  update: CategoryUncheckedUpdateWithoutCatalogInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutExhibitorInput = {
  create: CategoryUncheckedCreateWithoutExhibitorInput;
  update: CategoryUncheckedUpdateWithoutExhibitorInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutProductInput = {
  create: CategoryUncheckedCreateWithoutProductInput;
  update: CategoryUncheckedUpdateWithoutProductInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<Maybe<CategoryWhereInput>>>;
  NOT?: Maybe<Array<Maybe<CategoryWhereInput>>>;
  OR?: Maybe<Array<Maybe<CategoryWhereInput>>>;
  catalog?: Maybe<CatalogWhereInput>;
  catalogId?: Maybe<IntNullableFilter>;
  connection_type?: Maybe<EnumConnectionTypeEnumNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  product?: Maybe<ProductListRelationFilter>;
  sub_category?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum ConnectionTypeEnum {
  Child = 'child',
  Parent = 'parent'
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export enum DeliveryMethodEnum {
  Cdek = 'cdek',
  Courier = 'courier',
  FastCourier = 'fast_courier',
  Mail = 'mail'
}

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumConnectionTypeEnumNullableFilter = {
  equals?: Maybe<ConnectionTypeEnum>;
  in?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
  not?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  notIn?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
};

export type EnumConnectionTypeEnumNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  _min?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  equals?: Maybe<ConnectionTypeEnum>;
  in?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
  not?: Maybe<NestedEnumConnectionTypeEnumNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
};

export type EnumDeliveryMethodEnumNullableListFilter = {
  equals?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  has?: Maybe<DeliveryMethodEnum>;
  hasEvery?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  hasSome?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumExhibitorCategoryEnumFieldUpdateOperationsInput = {
  set?: Maybe<ExhibitorCategoryEnum>;
};

export type EnumExhibitorCategoryEnumFilter = {
  equals?: Maybe<ExhibitorCategoryEnum>;
  in?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
  not?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  notIn?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
};

export type EnumExhibitorCategoryEnumWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  _min?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  equals?: Maybe<ExhibitorCategoryEnum>;
  in?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
  not?: Maybe<NestedEnumExhibitorCategoryEnumWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
};

export type EnumMediaTypeFieldUpdateOperationsInput = {
  set?: Maybe<MediaType>;
};

export type EnumMediaTypeFilter = {
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type EnumMediaTypeNullableFilter = {
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeNullableFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type EnumMediaTypeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumMediaTypeNullableFilter>;
  _min?: Maybe<NestedEnumMediaTypeNullableFilter>;
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type EnumMediaTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumMediaTypeFilter>;
  _min?: Maybe<NestedEnumMediaTypeFilter>;
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type EnumMetaTagsEnumNullableListFilter = {
  equals?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  has?: Maybe<MetaTagsEnum>;
  hasEvery?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  hasSome?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumPaymentMethodEnumNullableListFilter = {
  equals?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  has?: Maybe<PaymentMethodEnum>;
  hasEvery?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  hasSome?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumPossibilityOfPurchaseEnumNullableListFilter = {
  equals?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  has?: Maybe<PossibilityOfPurchaseEnum>;
  hasEvery?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  hasSome?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumProductTypeEnumNullableFilter = {
  equals?: Maybe<ProductTypeEnum>;
  in?: Maybe<Array<Maybe<ProductTypeEnum>>>;
  not?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  notIn?: Maybe<Array<Maybe<ProductTypeEnum>>>;
};

export type EnumProductTypeEnumNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  _min?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  equals?: Maybe<ProductTypeEnum>;
  in?: Maybe<Array<Maybe<ProductTypeEnum>>>;
  not?: Maybe<NestedEnumProductTypeEnumNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ProductTypeEnum>>>;
};

export type EnumStandardEnumNullableListFilter = {
  equals?: Maybe<Array<Maybe<StandardEnum>>>;
  has?: Maybe<StandardEnum>;
  hasEvery?: Maybe<Array<Maybe<StandardEnum>>>;
  hasSome?: Maybe<Array<Maybe<StandardEnum>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type EnumVisibleCostEnumFieldUpdateOperationsInput = {
  set?: Maybe<VisibleCostEnum>;
};

export type EnumVisibleCostEnumFilter = {
  equals?: Maybe<VisibleCostEnum>;
  in?: Maybe<Array<Maybe<VisibleCostEnum>>>;
  not?: Maybe<NestedEnumVisibleCostEnumFilter>;
  notIn?: Maybe<Array<Maybe<VisibleCostEnum>>>;
};

export type EnumVisibleCostEnumWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumVisibleCostEnumFilter>;
  _min?: Maybe<NestedEnumVisibleCostEnumFilter>;
  equals?: Maybe<VisibleCostEnum>;
  in?: Maybe<Array<Maybe<VisibleCostEnum>>>;
  not?: Maybe<NestedEnumVisibleCostEnumWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<VisibleCostEnum>>>;
};

export type Exhibitor = {
  __typename?: 'Exhibitor';
  _count: ExhibitorCountOutputType;
  cases: Array<Case>;
  catalog?: Maybe<Catalog>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs: Array<Catalog>;
  categories: Array<Category>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email: Array<Scalars['String']>;
  factory_adress?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations: Array<Location>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<Media>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  main_media?: Maybe<Media>;
  meta_tags: Array<MetaTagsEnum>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback: Array<Feedback>;
  owner?: Maybe<User>;
  partners: Array<Partner>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products: Array<Product>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback: Array<Feedback>;
  userId?: Maybe<Scalars['Int']>;
};


export type ExhibitorCasesArgs = {
  cursor?: Maybe<CaseWhereUniqueInput>;
  distinct?: Maybe<CaseScalarFieldEnum>;
  orderBy?: Maybe<CaseOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CaseWhereInput>;
};


export type ExhibitorCatalogsArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  distinct?: Maybe<CatalogScalarFieldEnum>;
  orderBy?: Maybe<CatalogOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type ExhibitorCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<CategoryScalarFieldEnum>;
  orderBy?: Maybe<CategoryOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type ExhibitorLocationsArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<LocationScalarFieldEnum>;
  orderBy?: Maybe<LocationOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};


export type ExhibitorOur_FeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<FeedbackScalarFieldEnum>;
  orderBy?: Maybe<FeedbackOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type ExhibitorPartnersArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  distinct?: Maybe<PartnerScalarFieldEnum>;
  orderBy?: Maybe<PartnerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type ExhibitorProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type ExhibitorUs_FeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<FeedbackScalarFieldEnum>;
  orderBy?: Maybe<FeedbackOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};

export type ExhibitorAvgAggregateOutputType = {
  __typename?: 'ExhibitorAvgAggregateOutputType';
  catalogId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  logoId?: Maybe<Scalars['Float']>;
  mail_logoId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ExhibitorAvgOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum ExhibitorCategoryEnum {
  It = 'IT',
  Analytic = 'analytic',
  Business = 'business',
  Content = 'content',
  Design = 'design',
  Development = 'development',
  Education = 'education',
  Management = 'management'
}

export type ExhibitorCountAggregateOutputType = {
  __typename?: 'ExhibitorCountAggregateOutputType';
  _all: Scalars['Int'];
  catalogId: Scalars['Int'];
  category: Scalars['Int'];
  clients: Scalars['Int'];
  company_description: Scalars['Int'];
  contact_person: Scalars['Int'];
  description: Scalars['Int'];
  email: Scalars['Int'];
  factory_adress: Scalars['Int'];
  id: Scalars['Int'];
  import_substitution: Scalars['Int'];
  inn: Scalars['Int'];
  is_import_substitution: Scalars['Int'];
  is_moderate: Scalars['Int'];
  legal_adress: Scalars['Int'];
  location_table: Scalars['Int'];
  login: Scalars['Int'];
  logoId: Scalars['Int'];
  mail_logoId: Scalars['Int'];
  meta_tags: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  name: Scalars['Int'];
  notification_email: Scalars['Int'];
  partners_table: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  portfolio: Scalars['Int'];
  site_url: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ExhibitorCountOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  category?: Maybe<SortOrder>;
  clients?: Maybe<SortOrder>;
  company_description?: Maybe<SortOrder>;
  contact_person?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  factory_adress?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  import_substitution?: Maybe<SortOrder>;
  inn?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  legal_adress?: Maybe<SortOrder>;
  location_table?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  meta_tags?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  notification_email?: Maybe<SortOrder>;
  partners_table?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  portfolio?: Maybe<SortOrder>;
  site_url?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorCountOutputType = {
  __typename?: 'ExhibitorCountOutputType';
  cases: Scalars['Int'];
  catalogs: Scalars['Int'];
  categories: Scalars['Int'];
  locations: Scalars['Int'];
  our_feedback: Scalars['Int'];
  partners: Scalars['Int'];
  products: Scalars['Int'];
  us_feedback: Scalars['Int'];
};

export type ExhibitorCreateInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateManyCatalogInput = {
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorCreateManyCatalogInputEnvelope = {
  data: ExhibitorCreateManyCatalogInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ExhibitorCreateManyInput = {
  catalogId?: Maybe<Scalars['Int']>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorCreateManyLogoInput = {
  catalogId?: Maybe<Scalars['Int']>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorCreateManyLogoInputEnvelope = {
  data: ExhibitorCreateManyLogoInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ExhibitorCreateManyMain_MediaInput = {
  catalogId?: Maybe<Scalars['Int']>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorCreateManyMain_MediaInputEnvelope = {
  data: ExhibitorCreateManyMain_MediaInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ExhibitorCreateManyemailInput = {
  set: Scalars['String'];
};

export type ExhibitorCreateManymeta_TagsInput = {
  set: MetaTagsEnum;
};

export type ExhibitorCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ExhibitorCreateManyCatalogInputEnvelope>;
};

export type ExhibitorCreateNestedManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutLogoInput>>>;
  createMany?: Maybe<ExhibitorCreateManyLogoInputEnvelope>;
};

export type ExhibitorCreateNestedManyWithoutMain_MediaInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutMain_MediaInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutMain_MediaInput>>>;
  createMany?: Maybe<ExhibitorCreateManyMain_MediaInputEnvelope>;
};

export type ExhibitorCreateNestedOneWithoutCasesInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCasesInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCasesInput>;
};

export type ExhibitorCreateNestedOneWithoutCatalogsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCatalogsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCatalogsInput>;
};

export type ExhibitorCreateNestedOneWithoutCategoriesInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCategoriesInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCategoriesInput>;
};

export type ExhibitorCreateNestedOneWithoutLocationsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutLocationsInput>;
};

export type ExhibitorCreateNestedOneWithoutOur_FeedbackInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOur_FeedbackInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOur_FeedbackInput>;
};

export type ExhibitorCreateNestedOneWithoutOwnerInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOwnerInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOwnerInput>;
};

export type ExhibitorCreateNestedOneWithoutPartnersInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutPartnersInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutPartnersInput>;
};

export type ExhibitorCreateNestedOneWithoutProductsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutProductsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutProductsInput>;
};

export type ExhibitorCreateNestedOneWithoutUs_FeedbackInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutUs_FeedbackInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutUs_FeedbackInput>;
};

export type ExhibitorCreateOrConnectWithoutCasesInput = {
  create: ExhibitorUncheckedCreateWithoutCasesInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutCatalogInput = {
  create: ExhibitorUncheckedCreateWithoutCatalogInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutCatalogsInput = {
  create: ExhibitorUncheckedCreateWithoutCatalogsInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutCategoriesInput = {
  create: ExhibitorUncheckedCreateWithoutCategoriesInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutLocationsInput = {
  create: ExhibitorUncheckedCreateWithoutLocationsInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutLogoInput = {
  create: ExhibitorUncheckedCreateWithoutLogoInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutMain_MediaInput = {
  create: ExhibitorUncheckedCreateWithoutMain_MediaInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutOur_FeedbackInput = {
  create: ExhibitorUncheckedCreateWithoutOur_FeedbackInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutOwnerInput = {
  create: ExhibitorUncheckedCreateWithoutOwnerInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutPartnersInput = {
  create: ExhibitorUncheckedCreateWithoutPartnersInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutProductsInput = {
  create: ExhibitorUncheckedCreateWithoutProductsInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateOrConnectWithoutUs_FeedbackInput = {
  create: ExhibitorUncheckedCreateWithoutUs_FeedbackInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorCreateWithoutCasesInput = {
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutCatalogInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutCatalogsInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutCategoriesInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutLocationsInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutLogoInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutMain_MediaInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutOur_FeedbackInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutOwnerInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutPartnersInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutProductsInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorCreateWithoutUs_FeedbackInput = {
  cases?: Maybe<CaseCreateNestedManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogCreateNestedOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackCreateNestedManyWithoutAuthorInput>;
  owner?: Maybe<UserCreateNestedOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
};

export type ExhibitorCreateemailInput = {
  set: Scalars['String'];
};

export type ExhibitorCreatemeta_TagsInput = {
  set: MetaTagsEnum;
};

export type ExhibitorListRelationFilter = {
  every?: Maybe<ExhibitorWhereInput>;
  none?: Maybe<ExhibitorWhereInput>;
  some?: Maybe<ExhibitorWhereInput>;
};

export type ExhibitorMaxAggregateOutputType = {
  __typename?: 'ExhibitorMaxAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  category?: Maybe<ExhibitorCategoryEnum>;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorMaxOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  category?: Maybe<SortOrder>;
  clients?: Maybe<SortOrder>;
  company_description?: Maybe<SortOrder>;
  contact_person?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  factory_adress?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  import_substitution?: Maybe<SortOrder>;
  inn?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  legal_adress?: Maybe<SortOrder>;
  location_table?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  notification_email?: Maybe<SortOrder>;
  partners_table?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  portfolio?: Maybe<SortOrder>;
  site_url?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorMinAggregateOutputType = {
  __typename?: 'ExhibitorMinAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  category?: Maybe<ExhibitorCategoryEnum>;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notification_email?: Maybe<Scalars['String']>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorMinOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  category?: Maybe<SortOrder>;
  clients?: Maybe<SortOrder>;
  company_description?: Maybe<SortOrder>;
  contact_person?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  factory_adress?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  import_substitution?: Maybe<SortOrder>;
  inn?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  legal_adress?: Maybe<SortOrder>;
  location_table?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  notification_email?: Maybe<SortOrder>;
  partners_table?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  portfolio?: Maybe<SortOrder>;
  site_url?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ExhibitorOrderByWithAggregationInput = {
  _avg?: Maybe<ExhibitorAvgOrderByAggregateInput>;
  _count?: Maybe<ExhibitorCountOrderByAggregateInput>;
  _max?: Maybe<ExhibitorMaxOrderByAggregateInput>;
  _min?: Maybe<ExhibitorMinOrderByAggregateInput>;
  _sum?: Maybe<ExhibitorSumOrderByAggregateInput>;
  catalogId?: Maybe<SortOrder>;
  category?: Maybe<SortOrder>;
  clients?: Maybe<SortOrder>;
  company_description?: Maybe<SortOrder>;
  contact_person?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  factory_adress?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  import_substitution?: Maybe<SortOrder>;
  inn?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  legal_adress?: Maybe<SortOrder>;
  location_table?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  meta_tags?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  notification_email?: Maybe<SortOrder>;
  partners_table?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  portfolio?: Maybe<SortOrder>;
  site_url?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorOrderByWithRelationInput = {
  cases?: Maybe<CaseOrderByRelationAggregateInput>;
  catalog?: Maybe<CatalogOrderByWithRelationInput>;
  catalogId?: Maybe<SortOrder>;
  catalogs?: Maybe<CatalogOrderByRelationAggregateInput>;
  categories?: Maybe<CategoryOrderByRelationAggregateInput>;
  category?: Maybe<SortOrder>;
  clients?: Maybe<SortOrder>;
  company_description?: Maybe<SortOrder>;
  contact_person?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  factory_adress?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  import_substitution?: Maybe<SortOrder>;
  inn?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  legal_adress?: Maybe<SortOrder>;
  location_table?: Maybe<SortOrder>;
  locations?: Maybe<LocationOrderByRelationAggregateInput>;
  login?: Maybe<SortOrder>;
  logo?: Maybe<MediaOrderByWithRelationInput>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  main_media?: Maybe<MediaOrderByWithRelationInput>;
  meta_tags?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  notification_email?: Maybe<SortOrder>;
  our_feedback?: Maybe<FeedbackOrderByRelationAggregateInput>;
  owner?: Maybe<UserOrderByWithRelationInput>;
  partners?: Maybe<PartnerOrderByRelationAggregateInput>;
  partners_table?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  portfolio?: Maybe<SortOrder>;
  products?: Maybe<ProductOrderByRelationAggregateInput>;
  site_url?: Maybe<SortOrder>;
  us_feedback?: Maybe<FeedbackOrderByRelationAggregateInput>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorRelationFilter = {
  is?: Maybe<ExhibitorWhereInput>;
  isNot?: Maybe<ExhibitorWhereInput>;
};

export enum ExhibitorScalarFieldEnum {
  CatalogId = 'catalogId',
  Category = 'category',
  Clients = 'clients',
  CompanyDescription = 'company_description',
  ContactPerson = 'contact_person',
  Description = 'description',
  Email = 'email',
  FactoryAdress = 'factory_adress',
  Id = 'id',
  ImportSubstitution = 'import_substitution',
  Inn = 'inn',
  IsImportSubstitution = 'is_import_substitution',
  IsModerate = 'is_moderate',
  LegalAdress = 'legal_adress',
  LocationTable = 'location_table',
  Login = 'login',
  LogoId = 'logoId',
  MailLogoId = 'mail_logoId',
  MetaTags = 'meta_tags',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Name = 'name',
  NotificationEmail = 'notification_email',
  PartnersTable = 'partners_table',
  Password = 'password',
  Phone = 'phone',
  Portfolio = 'portfolio',
  SiteUrl = 'site_url',
  UserId = 'userId'
}

export type ExhibitorScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  catalogId?: Maybe<IntNullableFilter>;
  category?: Maybe<EnumExhibitorCategoryEnumFilter>;
  clients?: Maybe<StringNullableFilter>;
  company_description?: Maybe<StringNullableFilter>;
  contact_person?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableListFilter>;
  factory_adress?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  import_substitution?: Maybe<StringNullableFilter>;
  inn?: Maybe<StringNullableFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolNullableFilter>;
  legal_adress?: Maybe<StringNullableFilter>;
  location_table?: Maybe<StringNullableFilter>;
  login?: Maybe<StringNullableFilter>;
  logoId?: Maybe<IntNullableFilter>;
  mail_logoId?: Maybe<IntNullableFilter>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringFilter>;
  notification_email?: Maybe<StringNullableFilter>;
  partners_table?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  portfolio?: Maybe<StringNullableFilter>;
  site_url?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type ExhibitorScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ExhibitorScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ExhibitorScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ExhibitorScalarWhereWithAggregatesInput>>>;
  catalogId?: Maybe<IntNullableWithAggregatesFilter>;
  category?: Maybe<EnumExhibitorCategoryEnumWithAggregatesFilter>;
  clients?: Maybe<StringNullableWithAggregatesFilter>;
  company_description?: Maybe<StringNullableWithAggregatesFilter>;
  contact_person?: Maybe<StringNullableWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  email?: Maybe<StringNullableListFilter>;
  factory_adress?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  import_substitution?: Maybe<StringNullableWithAggregatesFilter>;
  inn?: Maybe<StringNullableWithAggregatesFilter>;
  is_import_substitution?: Maybe<BoolNullableWithAggregatesFilter>;
  is_moderate?: Maybe<BoolNullableWithAggregatesFilter>;
  legal_adress?: Maybe<StringNullableWithAggregatesFilter>;
  location_table?: Maybe<StringNullableWithAggregatesFilter>;
  login?: Maybe<StringNullableWithAggregatesFilter>;
  logoId?: Maybe<IntNullableWithAggregatesFilter>;
  mail_logoId?: Maybe<IntNullableWithAggregatesFilter>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  notification_email?: Maybe<StringNullableWithAggregatesFilter>;
  partners_table?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringNullableWithAggregatesFilter>;
  phone?: Maybe<StringNullableWithAggregatesFilter>;
  portfolio?: Maybe<StringNullableWithAggregatesFilter>;
  site_url?: Maybe<StringNullableWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
};

export type ExhibitorSumAggregateOutputType = {
  __typename?: 'ExhibitorSumAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorSumOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  logoId?: Maybe<SortOrder>;
  mail_logoId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ExhibitorUncheckedCreateInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ExhibitorCreateManyCatalogInputEnvelope>;
};

export type ExhibitorUncheckedCreateNestedManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutLogoInput>>>;
  createMany?: Maybe<ExhibitorCreateManyLogoInputEnvelope>;
};

export type ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutMain_MediaInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutMain_MediaInput>>>;
  createMany?: Maybe<ExhibitorCreateManyMain_MediaInputEnvelope>;
};

export type ExhibitorUncheckedCreateNestedOneWithoutOwnerInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOwnerInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOwnerInput>;
};

export type ExhibitorUncheckedCreateWithoutCasesInput = {
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutCatalogInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutCatalogsInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutCategoriesInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutLocationsInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutLogoInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutMain_MediaInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutOur_FeedbackInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutOwnerInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
};

export type ExhibitorUncheckedCreateWithoutPartnersInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutProductsInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  us_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutCompanyInput>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedCreateWithoutUs_FeedbackInput = {
  cases?: Maybe<CaseUncheckedCreateNestedManyWithoutExhibitorInput>;
  catalogId?: Maybe<Scalars['Int']>;
  catalogs?: Maybe<CatalogUncheckedCreateNestedManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedCreateNestedManyWithoutExhibitorInput>;
  category: ExhibitorCategoryEnum;
  clients?: Maybe<Scalars['String']>;
  company_description?: Maybe<Scalars['String']>;
  contact_person?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  import_substitution?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  legal_adress?: Maybe<Scalars['String']>;
  location_table?: Maybe<Scalars['String']>;
  locations?: Maybe<LocationUncheckedCreateNestedManyWithoutExhibitorInput>;
  login?: Maybe<Scalars['String']>;
  logoId?: Maybe<Scalars['Int']>;
  mail_logoId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  notification_email?: Maybe<Scalars['String']>;
  our_feedback?: Maybe<FeedbackUncheckedCreateNestedManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedCreateNestedManyWithoutExhibitorInput>;
  partners_table?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  portfolio?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUncheckedCreateNestedManyWithoutExhibitorInput>;
  site_url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ExhibitorUncheckedUpdateInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateManyInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ExhibitorCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type ExhibitorUncheckedUpdateManyWithoutExhibitorInput = {
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateManyWithoutExhibitor_For_LogoInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateManyWithoutExhibitor_For_Main_LogoInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutLogoInput>>>;
  createMany?: Maybe<ExhibitorCreateManyLogoInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutLogoInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutLogoInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutLogoInput>>>;
};

export type ExhibitorUncheckedUpdateManyWithoutMain_MediaInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutMain_MediaInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutMain_MediaInput>>>;
  createMany?: Maybe<ExhibitorCreateManyMain_MediaInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutMain_MediaInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutMain_MediaInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutMain_MediaInput>>>;
};

export type ExhibitorUncheckedUpdateOneWithoutOwnerInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOwnerInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOwnerInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutOwnerInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutOwnerInput>;
};

export type ExhibitorUncheckedUpdateWithoutCasesInput = {
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutCatalogInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutCatalogsInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutCategoriesInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutLocationsInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutLogoInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutMain_MediaInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutOur_FeedbackInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutOwnerInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUncheckedUpdateWithoutPartnersInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutProductsInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutCompanyInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUncheckedUpdateWithoutUs_FeedbackInput = {
  cases?: Maybe<CaseUncheckedUpdateManyWithoutExhibitorInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  catalogs?: Maybe<CatalogUncheckedUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUncheckedUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUncheckedUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  mail_logoId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUncheckedUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUncheckedUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUncheckedUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type ExhibitorUpdateInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateManyMutationInput = {
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ExhibitorUpdateManyWithWhereWithoutCatalogInput = {
  data: ExhibitorUncheckedUpdateManyWithoutExhibitorInput;
  where: ExhibitorScalarWhereInput;
};

export type ExhibitorUpdateManyWithWhereWithoutLogoInput = {
  data: ExhibitorUncheckedUpdateManyWithoutExhibitor_For_LogoInput;
  where: ExhibitorScalarWhereInput;
};

export type ExhibitorUpdateManyWithWhereWithoutMain_MediaInput = {
  data: ExhibitorUncheckedUpdateManyWithoutExhibitor_For_Main_LogoInput;
  where: ExhibitorScalarWhereInput;
};

export type ExhibitorUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ExhibitorCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type ExhibitorUpdateManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutLogoInput>>>;
  createMany?: Maybe<ExhibitorCreateManyLogoInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutLogoInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutLogoInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutLogoInput>>>;
};

export type ExhibitorUpdateManyWithoutMain_MediaInput = {
  connect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ExhibitorCreateOrConnectWithoutMain_MediaInput>>>;
  create?: Maybe<Array<Maybe<ExhibitorCreateWithoutMain_MediaInput>>>;
  createMany?: Maybe<ExhibitorCreateManyMain_MediaInputEnvelope>;
  delete?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ExhibitorScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ExhibitorWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ExhibitorUpdateWithWhereUniqueWithoutMain_MediaInput>>>;
  updateMany?: Maybe<Array<Maybe<ExhibitorUpdateManyWithWhereWithoutMain_MediaInput>>>;
  upsert?: Maybe<Array<Maybe<ExhibitorUpsertWithWhereUniqueWithoutMain_MediaInput>>>;
};

export type ExhibitorUpdateOneRequiredWithoutCatalogsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCatalogsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCatalogsInput>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutCatalogsInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutCatalogsInput>;
};

export type ExhibitorUpdateOneRequiredWithoutLocationsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutLocationsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutLocationsInput>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutLocationsInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutLocationsInput>;
};

export type ExhibitorUpdateOneRequiredWithoutPartnersInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutPartnersInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutPartnersInput>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutPartnersInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutPartnersInput>;
};

export type ExhibitorUpdateOneWithoutCasesInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCasesInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCasesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutCasesInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutCasesInput>;
};

export type ExhibitorUpdateOneWithoutCategoriesInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutCategoriesInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutCategoriesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutCategoriesInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutCategoriesInput>;
};

export type ExhibitorUpdateOneWithoutOur_FeedbackInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOur_FeedbackInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOur_FeedbackInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutOur_FeedbackInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutOur_FeedbackInput>;
};

export type ExhibitorUpdateOneWithoutOwnerInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutOwnerInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutOwnerInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutOwnerInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutOwnerInput>;
};

export type ExhibitorUpdateOneWithoutProductsInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutProductsInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutProductsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutProductsInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutProductsInput>;
};

export type ExhibitorUpdateOneWithoutUs_FeedbackInput = {
  connect?: Maybe<ExhibitorWhereUniqueInput>;
  connectOrCreate?: Maybe<ExhibitorCreateOrConnectWithoutUs_FeedbackInput>;
  create?: Maybe<ExhibitorUncheckedCreateWithoutUs_FeedbackInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ExhibitorUncheckedUpdateWithoutUs_FeedbackInput>;
  upsert?: Maybe<ExhibitorUpsertWithoutUs_FeedbackInput>;
};

export type ExhibitorUpdateWithWhereUniqueWithoutCatalogInput = {
  data: ExhibitorUncheckedUpdateWithoutCatalogInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpdateWithWhereUniqueWithoutLogoInput = {
  data: ExhibitorUncheckedUpdateWithoutLogoInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpdateWithWhereUniqueWithoutMain_MediaInput = {
  data: ExhibitorUncheckedUpdateWithoutMain_MediaInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpdateWithoutCasesInput = {
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutCatalogInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutCatalogsInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutCategoriesInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutLocationsInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutLogoInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutMain_MediaInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutOur_FeedbackInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutOwnerInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutPartnersInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutProductsInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  us_feedback?: Maybe<FeedbackUpdateManyWithoutCompanyInput>;
};

export type ExhibitorUpdateWithoutUs_FeedbackInput = {
  cases?: Maybe<CaseUpdateManyWithoutExhibitorInput>;
  catalog?: Maybe<CatalogUpdateOneWithoutExhibitorInput>;
  catalogs?: Maybe<CatalogUpdateManyWithoutAuthorInput>;
  categories?: Maybe<CategoryUpdateManyWithoutExhibitorInput>;
  category?: Maybe<EnumExhibitorCategoryEnumFieldUpdateOperationsInput>;
  clients?: Maybe<NullableStringFieldUpdateOperationsInput>;
  company_description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  contact_person?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  factory_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  import_substitution?: Maybe<NullableStringFieldUpdateOperationsInput>;
  inn?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  legal_adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  location_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locations?: Maybe<LocationUpdateManyWithoutExhibitorInput>;
  login?: Maybe<NullableStringFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutExhibitor_For_LogoInput>;
  main_media?: Maybe<MediaUpdateOneWithoutExhibitor_For_Main_LogoInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  notification_email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  our_feedback?: Maybe<FeedbackUpdateManyWithoutAuthorInput>;
  owner?: Maybe<UserUpdateOneWithoutExhibitorInput>;
  partners?: Maybe<PartnerUpdateManyWithoutExhibitorInput>;
  partners_table?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  phone?: Maybe<NullableStringFieldUpdateOperationsInput>;
  portfolio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  products?: Maybe<ProductUpdateManyWithoutExhibitorInput>;
  site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ExhibitorUpdateemailInput = {
  push?: Maybe<Array<Maybe<Scalars['String']>>>;
  set?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ExhibitorUpdatemeta_TagsInput = {
  push?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  set?: Maybe<Array<Maybe<MetaTagsEnum>>>;
};

export type ExhibitorUpsertWithWhereUniqueWithoutCatalogInput = {
  create: ExhibitorUncheckedCreateWithoutCatalogInput;
  update: ExhibitorUncheckedUpdateWithoutCatalogInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpsertWithWhereUniqueWithoutLogoInput = {
  create: ExhibitorUncheckedCreateWithoutLogoInput;
  update: ExhibitorUncheckedUpdateWithoutLogoInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpsertWithWhereUniqueWithoutMain_MediaInput = {
  create: ExhibitorUncheckedCreateWithoutMain_MediaInput;
  update: ExhibitorUncheckedUpdateWithoutMain_MediaInput;
  where: ExhibitorWhereUniqueInput;
};

export type ExhibitorUpsertWithoutCasesInput = {
  create: ExhibitorUncheckedCreateWithoutCasesInput;
  update: ExhibitorUncheckedUpdateWithoutCasesInput;
};

export type ExhibitorUpsertWithoutCatalogsInput = {
  create: ExhibitorUncheckedCreateWithoutCatalogsInput;
  update: ExhibitorUncheckedUpdateWithoutCatalogsInput;
};

export type ExhibitorUpsertWithoutCategoriesInput = {
  create: ExhibitorUncheckedCreateWithoutCategoriesInput;
  update: ExhibitorUncheckedUpdateWithoutCategoriesInput;
};

export type ExhibitorUpsertWithoutLocationsInput = {
  create: ExhibitorUncheckedCreateWithoutLocationsInput;
  update: ExhibitorUncheckedUpdateWithoutLocationsInput;
};

export type ExhibitorUpsertWithoutOur_FeedbackInput = {
  create: ExhibitorUncheckedCreateWithoutOur_FeedbackInput;
  update: ExhibitorUncheckedUpdateWithoutOur_FeedbackInput;
};

export type ExhibitorUpsertWithoutOwnerInput = {
  create: ExhibitorUncheckedCreateWithoutOwnerInput;
  update: ExhibitorUncheckedUpdateWithoutOwnerInput;
};

export type ExhibitorUpsertWithoutPartnersInput = {
  create: ExhibitorUncheckedCreateWithoutPartnersInput;
  update: ExhibitorUncheckedUpdateWithoutPartnersInput;
};

export type ExhibitorUpsertWithoutProductsInput = {
  create: ExhibitorUncheckedCreateWithoutProductsInput;
  update: ExhibitorUncheckedUpdateWithoutProductsInput;
};

export type ExhibitorUpsertWithoutUs_FeedbackInput = {
  create: ExhibitorUncheckedCreateWithoutUs_FeedbackInput;
  update: ExhibitorUncheckedUpdateWithoutUs_FeedbackInput;
};

export type ExhibitorWhereInput = {
  AND?: Maybe<Array<Maybe<ExhibitorWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ExhibitorWhereInput>>>;
  OR?: Maybe<Array<Maybe<ExhibitorWhereInput>>>;
  cases?: Maybe<CaseListRelationFilter>;
  catalog?: Maybe<CatalogWhereInput>;
  catalogId?: Maybe<IntNullableFilter>;
  catalogs?: Maybe<CatalogListRelationFilter>;
  categories?: Maybe<CategoryListRelationFilter>;
  category?: Maybe<EnumExhibitorCategoryEnumFilter>;
  clients?: Maybe<StringNullableFilter>;
  company_description?: Maybe<StringNullableFilter>;
  contact_person?: Maybe<StringNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  email?: Maybe<StringNullableListFilter>;
  factory_adress?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  import_substitution?: Maybe<StringNullableFilter>;
  inn?: Maybe<StringNullableFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolNullableFilter>;
  legal_adress?: Maybe<StringNullableFilter>;
  location_table?: Maybe<StringNullableFilter>;
  locations?: Maybe<LocationListRelationFilter>;
  login?: Maybe<StringNullableFilter>;
  logo?: Maybe<MediaWhereInput>;
  logoId?: Maybe<IntNullableFilter>;
  mail_logoId?: Maybe<IntNullableFilter>;
  main_media?: Maybe<MediaWhereInput>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolNullableFilter>;
  name?: Maybe<StringFilter>;
  notification_email?: Maybe<StringNullableFilter>;
  our_feedback?: Maybe<FeedbackListRelationFilter>;
  owner?: Maybe<UserWhereInput>;
  partners?: Maybe<PartnerListRelationFilter>;
  partners_table?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  phone?: Maybe<StringNullableFilter>;
  portfolio?: Maybe<StringNullableFilter>;
  products?: Maybe<ProductListRelationFilter>;
  site_url?: Maybe<StringNullableFilter>;
  us_feedback?: Maybe<FeedbackListRelationFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type ExhibitorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  _count: FeedbackCountOutputType;
  author?: Maybe<Exhibitor>;
  company?: Maybe<Exhibitor>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  exhibitorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_moderate: Scalars['Boolean'];
  is_published?: Maybe<Scalars['Boolean']>;
  medias: Array<Media>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type FeedbackMediasArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  distinct?: Maybe<MediaScalarFieldEnum>;
  orderBy?: Maybe<MediaOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};

export type FeedbackAvgAggregateOutputType = {
  __typename?: 'FeedbackAvgAggregateOutputType';
  companyId?: Maybe<Scalars['Float']>;
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
};

export type FeedbackAvgOrderByAggregateInput = {
  companyId?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
};

export type FeedbackCountAggregateOutputType = {
  __typename?: 'FeedbackCountAggregateOutputType';
  _all: Scalars['Int'];
  companyId: Scalars['Int'];
  createdAt: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_published: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  rate: Scalars['Int'];
  text: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FeedbackCountOrderByAggregateInput = {
  companyId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeedbackCountOutputType = {
  __typename?: 'FeedbackCountOutputType';
  medias: Scalars['Int'];
};

export type FeedbackCreateInput = {
  author?: Maybe<ExhibitorCreateNestedOneWithoutOur_FeedbackInput>;
  company?: Maybe<ExhibitorCreateNestedOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<MediaCreateNestedManyWithoutFeedbackInput>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateManyAuthorInput = {
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateManyAuthorInputEnvelope = {
  data: FeedbackCreateManyAuthorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedbackCreateManyCompanyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateManyCompanyInputEnvelope = {
  data: FeedbackCreateManyCompanyInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedbackCreateManyInput = {
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutAuthorInput>>>;
  createMany?: Maybe<FeedbackCreateManyAuthorInputEnvelope>;
};

export type FeedbackCreateNestedManyWithoutCompanyInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutCompanyInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutCompanyInput>>>;
  createMany?: Maybe<FeedbackCreateManyCompanyInputEnvelope>;
};

export type FeedbackCreateNestedManyWithoutMediasInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutMediasInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutMediasInput>>>;
};

export type FeedbackCreateOrConnectWithoutAuthorInput = {
  create: FeedbackUncheckedCreateWithoutAuthorInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutCompanyInput = {
  create: FeedbackUncheckedCreateWithoutCompanyInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateOrConnectWithoutMediasInput = {
  create: FeedbackUncheckedCreateWithoutMediasInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackCreateWithoutAuthorInput = {
  company?: Maybe<ExhibitorCreateNestedOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<MediaCreateNestedManyWithoutFeedbackInput>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateWithoutCompanyInput = {
  author?: Maybe<ExhibitorCreateNestedOneWithoutOur_FeedbackInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<MediaCreateNestedManyWithoutFeedbackInput>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackCreateWithoutMediasInput = {
  author?: Maybe<ExhibitorCreateNestedOneWithoutOur_FeedbackInput>;
  company?: Maybe<ExhibitorCreateNestedOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackListRelationFilter = {
  every?: Maybe<FeedbackWhereInput>;
  none?: Maybe<FeedbackWhereInput>;
  some?: Maybe<FeedbackWhereInput>;
};

export type FeedbackMaxAggregateOutputType = {
  __typename?: 'FeedbackMaxAggregateOutputType';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackMaxOrderByAggregateInput = {
  companyId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeedbackMinAggregateOutputType = {
  __typename?: 'FeedbackMinAggregateOutputType';
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackMinOrderByAggregateInput = {
  companyId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeedbackOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type FeedbackOrderByWithAggregationInput = {
  _avg?: Maybe<FeedbackAvgOrderByAggregateInput>;
  _count?: Maybe<FeedbackCountOrderByAggregateInput>;
  _max?: Maybe<FeedbackMaxOrderByAggregateInput>;
  _min?: Maybe<FeedbackMinOrderByAggregateInput>;
  _sum?: Maybe<FeedbackSumOrderByAggregateInput>;
  companyId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeedbackOrderByWithRelationInput = {
  author?: Maybe<ExhibitorOrderByWithRelationInput>;
  company?: Maybe<ExhibitorOrderByWithRelationInput>;
  companyId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  medias?: Maybe<MediaOrderByRelationAggregateInput>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum FeedbackScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  ExhibitorId = 'exhibitorId',
  Id = 'id',
  IsModerate = 'is_moderate',
  IsPublished = 'is_published',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Rate = 'rate',
  Text = 'text',
  UpdatedAt = 'updatedAt'
}

export type FeedbackScalarWhereInput = {
  AND?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  companyId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  rate?: Maybe<IntNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedbackScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<FeedbackScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<FeedbackScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<FeedbackScalarWhereWithAggregatesInput>>>;
  companyId?: Maybe<IntNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  exhibitorId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_published?: Maybe<BoolNullableWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  rate?: Maybe<IntNullableWithAggregatesFilter>;
  text?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type FeedbackSumAggregateOutputType = {
  __typename?: 'FeedbackSumAggregateOutputType';
  companyId?: Maybe<Scalars['Int']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
};

export type FeedbackSumOrderByAggregateInput = {
  companyId?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  rate?: Maybe<SortOrder>;
};

export type FeedbackUncheckedCreateInput = {
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackUncheckedCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutAuthorInput>>>;
  createMany?: Maybe<FeedbackCreateManyAuthorInputEnvelope>;
};

export type FeedbackUncheckedCreateNestedManyWithoutCompanyInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutCompanyInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutCompanyInput>>>;
  createMany?: Maybe<FeedbackCreateManyCompanyInputEnvelope>;
};

export type FeedbackUncheckedCreateWithoutAuthorInput = {
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackUncheckedCreateWithoutCompanyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackUncheckedCreateWithoutMediasInput = {
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  rate?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackUncheckedUpdateInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateManyInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutAuthorInput>>>;
  createMany?: Maybe<FeedbackCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<FeedbackUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<FeedbackUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<FeedbackUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type FeedbackUncheckedUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutCompanyInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutCompanyInput>>>;
  createMany?: Maybe<FeedbackCreateManyCompanyInputEnvelope>;
  delete?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<FeedbackUpdateWithWhereUniqueWithoutCompanyInput>>>;
  updateMany?: Maybe<Array<Maybe<FeedbackUpdateManyWithWhereWithoutCompanyInput>>>;
  upsert?: Maybe<Array<Maybe<FeedbackUpsertWithWhereUniqueWithoutCompanyInput>>>;
};

export type FeedbackUncheckedUpdateManyWithoutFeedbackInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateManyWithoutOur_FeedbackInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateManyWithoutUs_FeedbackInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateWithoutAuthorInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateWithoutCompanyInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUncheckedUpdateWithoutMediasInput = {
  companyId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpdateInput = {
  author?: Maybe<ExhibitorUpdateOneWithoutOur_FeedbackInput>;
  company?: Maybe<ExhibitorUpdateOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutFeedbackInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpdateManyWithWhereWithoutAuthorInput = {
  data: FeedbackUncheckedUpdateManyWithoutOur_FeedbackInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutCompanyInput = {
  data: FeedbackUncheckedUpdateManyWithoutUs_FeedbackInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithWhereWithoutMediasInput = {
  data: FeedbackUncheckedUpdateManyWithoutFeedbackInput;
  where: FeedbackScalarWhereInput;
};

export type FeedbackUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutAuthorInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutAuthorInput>>>;
  createMany?: Maybe<FeedbackCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<FeedbackUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<FeedbackUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<FeedbackUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type FeedbackUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutCompanyInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutCompanyInput>>>;
  createMany?: Maybe<FeedbackCreateManyCompanyInputEnvelope>;
  delete?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<FeedbackUpdateWithWhereUniqueWithoutCompanyInput>>>;
  updateMany?: Maybe<Array<Maybe<FeedbackUpdateManyWithWhereWithoutCompanyInput>>>;
  upsert?: Maybe<Array<Maybe<FeedbackUpsertWithWhereUniqueWithoutCompanyInput>>>;
};

export type FeedbackUpdateManyWithoutMediasInput = {
  connect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<FeedbackCreateOrConnectWithoutMediasInput>>>;
  create?: Maybe<Array<Maybe<FeedbackCreateWithoutMediasInput>>>;
  delete?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<FeedbackScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<FeedbackWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<FeedbackUpdateWithWhereUniqueWithoutMediasInput>>>;
  updateMany?: Maybe<Array<Maybe<FeedbackUpdateManyWithWhereWithoutMediasInput>>>;
  upsert?: Maybe<Array<Maybe<FeedbackUpsertWithWhereUniqueWithoutMediasInput>>>;
};

export type FeedbackUpdateWithWhereUniqueWithoutAuthorInput = {
  data: FeedbackUncheckedUpdateWithoutAuthorInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutCompanyInput = {
  data: FeedbackUncheckedUpdateWithoutCompanyInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithWhereUniqueWithoutMediasInput = {
  data: FeedbackUncheckedUpdateWithoutMediasInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpdateWithoutAuthorInput = {
  company?: Maybe<ExhibitorUpdateOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutFeedbackInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutCompanyInput = {
  author?: Maybe<ExhibitorUpdateOneWithoutOur_FeedbackInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutFeedbackInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpdateWithoutMediasInput = {
  author?: Maybe<ExhibitorUpdateOneWithoutOur_FeedbackInput>;
  company?: Maybe<ExhibitorUpdateOneWithoutUs_FeedbackInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  rate?: Maybe<NullableIntFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedbackUpsertWithWhereUniqueWithoutAuthorInput = {
  create: FeedbackUncheckedCreateWithoutAuthorInput;
  update: FeedbackUncheckedUpdateWithoutAuthorInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutCompanyInput = {
  create: FeedbackUncheckedCreateWithoutCompanyInput;
  update: FeedbackUncheckedUpdateWithoutCompanyInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackUpsertWithWhereUniqueWithoutMediasInput = {
  create: FeedbackUncheckedCreateWithoutMediasInput;
  update: FeedbackUncheckedUpdateWithoutMediasInput;
  where: FeedbackWhereUniqueInput;
};

export type FeedbackWhereInput = {
  AND?: Maybe<Array<Maybe<FeedbackWhereInput>>>;
  NOT?: Maybe<Array<Maybe<FeedbackWhereInput>>>;
  OR?: Maybe<Array<Maybe<FeedbackWhereInput>>>;
  author?: Maybe<ExhibitorWhereInput>;
  company?: Maybe<ExhibitorWhereInput>;
  companyId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  medias?: Maybe<MediaListRelationFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  rate?: Maybe<IntNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedbackWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedFloatNullableFilter>;
  _min?: Maybe<NestedFloatNullableFilter>;
  _sum?: Maybe<NestedFloatNullableFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Location = {
  __typename?: 'Location';
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitor: Exhibitor;
  exhibitorId: Scalars['Int'];
  gps_coords?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_moderate: Scalars['Boolean'];
  is_visible: Scalars['Boolean'];
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationAvgAggregateOutputType = {
  __typename?: 'LocationAvgAggregateOutputType';
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type LocationAvgOrderByAggregateInput = {
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type LocationCountAggregateOutputType = {
  __typename?: 'LocationCountAggregateOutputType';
  _all: Scalars['Int'];
  adress: Scalars['Int'];
  cooperation_type: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  gps_coords: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_visible: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  name: Scalars['Int'];
  partner_site_url: Scalars['Int'];
};

export type LocationCountOrderByAggregateInput = {
  adress?: Maybe<SortOrder>;
  cooperation_type?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  gps_coords?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
};

export type LocationCreateInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitor: ExhibitorCreateNestedOneWithoutLocationsInput;
  gps_coords?: Maybe<Scalars['String']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationCreateManyExhibitorInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationCreateManyExhibitorInputEnvelope = {
  data: LocationCreateManyExhibitorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LocationCreateManyInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitorId: Scalars['Int'];
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LocationCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<LocationCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<LocationCreateManyExhibitorInputEnvelope>;
};

export type LocationCreateOrConnectWithoutExhibitorInput = {
  create: LocationUncheckedCreateWithoutExhibitorInput;
  where: LocationWhereUniqueInput;
};

export type LocationCreateWithoutExhibitorInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  gps_coords?: Maybe<Scalars['String']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationListRelationFilter = {
  every?: Maybe<LocationWhereInput>;
  none?: Maybe<LocationWhereInput>;
  some?: Maybe<LocationWhereInput>;
};

export type LocationMaxAggregateOutputType = {
  __typename?: 'LocationMaxAggregateOutputType';
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationMaxOrderByAggregateInput = {
  adress?: Maybe<SortOrder>;
  cooperation_type?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  gps_coords?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
};

export type LocationMinAggregateOutputType = {
  __typename?: 'LocationMinAggregateOutputType';
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationMinOrderByAggregateInput = {
  adress?: Maybe<SortOrder>;
  cooperation_type?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  gps_coords?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
};

export type LocationOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type LocationOrderByWithAggregationInput = {
  _avg?: Maybe<LocationAvgOrderByAggregateInput>;
  _count?: Maybe<LocationCountOrderByAggregateInput>;
  _max?: Maybe<LocationMaxOrderByAggregateInput>;
  _min?: Maybe<LocationMinOrderByAggregateInput>;
  _sum?: Maybe<LocationSumOrderByAggregateInput>;
  adress?: Maybe<SortOrder>;
  cooperation_type?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  gps_coords?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
};

export type LocationOrderByWithRelationInput = {
  adress?: Maybe<SortOrder>;
  cooperation_type?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  exhibitorId?: Maybe<SortOrder>;
  gps_coords?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_visible?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  partner_site_url?: Maybe<SortOrder>;
};

export enum LocationScalarFieldEnum {
  Adress = 'adress',
  CooperationType = 'cooperation_type',
  ExhibitorId = 'exhibitorId',
  GpsCoords = 'gps_coords',
  Id = 'id',
  IsModerate = 'is_moderate',
  IsVisible = 'is_visible',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Name = 'name',
  PartnerSiteUrl = 'partner_site_url'
}

export type LocationScalarWhereInput = {
  AND?: Maybe<Array<Maybe<LocationScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LocationScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<LocationScalarWhereInput>>>;
  adress?: Maybe<StringNullableFilter>;
  cooperation_type?: Maybe<StringNullableFilter>;
  exhibitorId?: Maybe<IntFilter>;
  gps_coords?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_visible?: Maybe<BoolFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  partner_site_url?: Maybe<StringNullableFilter>;
};

export type LocationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<LocationScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<LocationScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<LocationScalarWhereWithAggregatesInput>>>;
  adress?: Maybe<StringNullableWithAggregatesFilter>;
  cooperation_type?: Maybe<StringNullableWithAggregatesFilter>;
  exhibitorId?: Maybe<IntWithAggregatesFilter>;
  gps_coords?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_visible?: Maybe<BoolWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  partner_site_url?: Maybe<StringNullableWithAggregatesFilter>;
};

export type LocationSumAggregateOutputType = {
  __typename?: 'LocationSumAggregateOutputType';
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type LocationSumOrderByAggregateInput = {
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type LocationUncheckedCreateInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  exhibitorId: Scalars['Int'];
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationUncheckedCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LocationCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<LocationCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<LocationCreateManyExhibitorInputEnvelope>;
};

export type LocationUncheckedCreateWithoutExhibitorInput = {
  adress?: Maybe<Scalars['String']>;
  cooperation_type?: Maybe<Scalars['String']>;
  gps_coords?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_visible?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  partner_site_url?: Maybe<Scalars['String']>;
};

export type LocationUncheckedUpdateInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUncheckedUpdateManyInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUncheckedUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LocationCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<LocationCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<LocationCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LocationScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LocationUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<LocationUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<LocationUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type LocationUncheckedUpdateManyWithoutLocationsInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUncheckedUpdateWithoutExhibitorInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneRequiredWithoutLocationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyMutationInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpdateManyWithWhereWithoutExhibitorInput = {
  data: LocationUncheckedUpdateManyWithoutLocationsInput;
  where: LocationScalarWhereInput;
};

export type LocationUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<LocationCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<LocationCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<LocationCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<LocationScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<LocationWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<LocationUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<LocationUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<LocationUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type LocationUpdateWithWhereUniqueWithoutExhibitorInput = {
  data: LocationUncheckedUpdateWithoutExhibitorInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateWithoutExhibitorInput = {
  adress?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cooperation_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  gps_coords?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_visible?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  partner_site_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type LocationUpsertWithWhereUniqueWithoutExhibitorInput = {
  create: LocationUncheckedCreateWithoutExhibitorInput;
  update: LocationUncheckedUpdateWithoutExhibitorInput;
  where: LocationWhereUniqueInput;
};

export type LocationWhereInput = {
  AND?: Maybe<Array<Maybe<LocationWhereInput>>>;
  NOT?: Maybe<Array<Maybe<LocationWhereInput>>>;
  OR?: Maybe<Array<Maybe<LocationWhereInput>>>;
  adress?: Maybe<StringNullableFilter>;
  cooperation_type?: Maybe<StringNullableFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  exhibitorId?: Maybe<IntFilter>;
  gps_coords?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_visible?: Maybe<BoolFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  partner_site_url?: Maybe<StringNullableFilter>;
};

export type LocationWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Media = {
  __typename?: 'Media';
  _count: MediaCountOutputType;
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo: Array<Exhibitor>;
  exhibitor_for_main_logo: Array<Exhibitor>;
  feedback: Array<Feedback>;
  id: Scalars['Int'];
  isApproved: Scalars['Boolean'];
  is_moderate: Scalars['Boolean'];
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  partner: Array<Partner>;
  product_logo: Array<Product>;
  product_medias: Array<Product>;
  type: MediaType;
  url: Scalars['String'];
};


export type MediaExhibitor_For_LogoArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<ExhibitorScalarFieldEnum>;
  orderBy?: Maybe<ExhibitorOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type MediaExhibitor_For_Main_LogoArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<ExhibitorScalarFieldEnum>;
  orderBy?: Maybe<ExhibitorOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type MediaFeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<FeedbackScalarFieldEnum>;
  orderBy?: Maybe<FeedbackOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type MediaPartnerArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  distinct?: Maybe<PartnerScalarFieldEnum>;
  orderBy?: Maybe<PartnerOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type MediaProduct_LogoArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type MediaProduct_MediasArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<ProductScalarFieldEnum>;
  orderBy?: Maybe<ProductOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};

export type MediaAvgAggregateOutputType = {
  __typename?: 'MediaAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type MediaAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type MediaCountAggregateOutputType = {
  __typename?: 'MediaCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isApproved: Scalars['Int'];
  is_moderate: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  type: Scalars['Int'];
  url: Scalars['Int'];
};

export type MediaCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type MediaCountOutputType = {
  __typename?: 'MediaCountOutputType';
  exhibitor_for_logo: Scalars['Int'];
  exhibitor_for_main_logo: Scalars['Int'];
  feedback: Scalars['Int'];
  partner: Scalars['Int'];
  product_logo: Scalars['Int'];
  product_medias: Scalars['Int'];
};

export type MediaCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateNestedManyWithoutFeedbackInput = {
  connect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MediaCreateOrConnectWithoutFeedbackInput>>>;
  create?: Maybe<Array<Maybe<MediaCreateWithoutFeedbackInput>>>;
};

export type MediaCreateNestedManyWithoutProduct_MediasInput = {
  connect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MediaCreateOrConnectWithoutProduct_MediasInput>>>;
  create?: Maybe<Array<Maybe<MediaCreateWithoutProduct_MediasInput>>>;
};

export type MediaCreateNestedOneWithoutExhibitor_For_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutExhibitor_For_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutExhibitor_For_LogoInput>;
};

export type MediaCreateNestedOneWithoutExhibitor_For_Main_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutExhibitor_For_Main_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutExhibitor_For_Main_LogoInput>;
};

export type MediaCreateNestedOneWithoutPartnerInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutPartnerInput>;
  create?: Maybe<MediaUncheckedCreateWithoutPartnerInput>;
};

export type MediaCreateNestedOneWithoutProduct_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutProduct_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutProduct_LogoInput>;
};

export type MediaCreateOrConnectWithoutExhibitor_For_LogoInput = {
  create: MediaUncheckedCreateWithoutExhibitor_For_LogoInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutExhibitor_For_Main_LogoInput = {
  create: MediaUncheckedCreateWithoutExhibitor_For_Main_LogoInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutFeedbackInput = {
  create: MediaUncheckedCreateWithoutFeedbackInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutPartnerInput = {
  create: MediaUncheckedCreateWithoutPartnerInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutProduct_LogoInput = {
  create: MediaUncheckedCreateWithoutProduct_LogoInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateOrConnectWithoutProduct_MediasInput = {
  create: MediaUncheckedCreateWithoutProduct_MediasInput;
  where: MediaWhereUniqueInput;
};

export type MediaCreateWithoutExhibitor_For_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateWithoutExhibitor_For_Main_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateWithoutFeedbackInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateWithoutPartnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateWithoutProduct_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_medias?: Maybe<ProductCreateNestedManyWithoutMediasInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaCreateWithoutProduct_MediasInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorCreateNestedManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackCreateNestedManyWithoutMediasInput>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaListRelationFilter = {
  every?: Maybe<MediaWhereInput>;
  none?: Maybe<MediaWhereInput>;
  some?: Maybe<MediaWhereInput>;
};

export type MediaMaxAggregateOutputType = {
  __typename?: 'MediaMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  type?: Maybe<MediaType>;
  url?: Maybe<Scalars['String']>;
};

export type MediaMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type MediaMinAggregateOutputType = {
  __typename?: 'MediaMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  type?: Maybe<MediaType>;
  url?: Maybe<Scalars['String']>;
};

export type MediaMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type MediaOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type MediaOrderByWithAggregationInput = {
  _avg?: Maybe<MediaAvgOrderByAggregateInput>;
  _count?: Maybe<MediaCountOrderByAggregateInput>;
  _max?: Maybe<MediaMaxOrderByAggregateInput>;
  _min?: Maybe<MediaMinOrderByAggregateInput>;
  _sum?: Maybe<MediaSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type MediaOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  exhibitor_for_logo?: Maybe<ExhibitorOrderByRelationAggregateInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorOrderByRelationAggregateInput>;
  feedback?: Maybe<FeedbackOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  isApproved?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  partner?: Maybe<PartnerOrderByRelationAggregateInput>;
  product_logo?: Maybe<ProductOrderByRelationAggregateInput>;
  product_medias?: Maybe<ProductOrderByRelationAggregateInput>;
  type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type MediaRelationFilter = {
  is?: Maybe<MediaWhereInput>;
  isNot?: Maybe<MediaWhereInput>;
};

export enum MediaScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsApproved = 'isApproved',
  IsModerate = 'is_moderate',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Type = 'type',
  Url = 'url'
}

export type MediaScalarWhereInput = {
  AND?: Maybe<Array<Maybe<MediaScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<MediaScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<MediaScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  isApproved?: Maybe<BoolFilter>;
  is_moderate?: Maybe<BoolFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  type?: Maybe<EnumMediaTypeFilter>;
  url?: Maybe<StringFilter>;
};

export type MediaScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<MediaScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<MediaScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<MediaScalarWhereWithAggregatesInput>>>;
  createdAt?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  isApproved?: Maybe<BoolWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  type?: Maybe<EnumMediaTypeWithAggregatesFilter>;
  url?: Maybe<StringWithAggregatesFilter>;
};

export type MediaSumAggregateOutputType = {
  __typename?: 'MediaSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type MediaSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export enum MediaType {
  Image = 'image',
  Video = 'video'
}

export type MediaUncheckedCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutExhibitor_For_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutExhibitor_For_Main_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutFeedbackInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutPartnerInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutProduct_LogoInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedCreateWithoutProduct_MediasInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedCreateNestedManyWithoutMain_MediaInput>;
  id?: Maybe<Scalars['Int']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  partner?: Maybe<PartnerUncheckedCreateNestedManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedCreateNestedManyWithoutVideoInput>;
  type: MediaType;
  url: Scalars['String'];
};

export type MediaUncheckedUpdateInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateManyInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateManyWithoutMediasInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutExhibitor_For_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutExhibitor_For_Main_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutFeedbackInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutPartnerInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutProduct_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUncheckedUpdateWithoutProduct_MediasInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUncheckedUpdateManyWithoutMain_MediaInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUncheckedUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUncheckedUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateManyMutationInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateManyWithWhereWithoutFeedbackInput = {
  data: MediaUncheckedUpdateManyWithoutMediasInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithWhereWithoutProduct_MediasInput = {
  data: MediaUncheckedUpdateManyWithoutMediasInput;
  where: MediaScalarWhereInput;
};

export type MediaUpdateManyWithoutFeedbackInput = {
  connect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MediaCreateOrConnectWithoutFeedbackInput>>>;
  create?: Maybe<Array<Maybe<MediaCreateWithoutFeedbackInput>>>;
  delete?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MediaScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MediaUpdateWithWhereUniqueWithoutFeedbackInput>>>;
  updateMany?: Maybe<Array<Maybe<MediaUpdateManyWithWhereWithoutFeedbackInput>>>;
  upsert?: Maybe<Array<Maybe<MediaUpsertWithWhereUniqueWithoutFeedbackInput>>>;
};

export type MediaUpdateManyWithoutProduct_MediasInput = {
  connect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<MediaCreateOrConnectWithoutProduct_MediasInput>>>;
  create?: Maybe<Array<Maybe<MediaCreateWithoutProduct_MediasInput>>>;
  delete?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<MediaScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<MediaWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<MediaUpdateWithWhereUniqueWithoutProduct_MediasInput>>>;
  updateMany?: Maybe<Array<Maybe<MediaUpdateManyWithWhereWithoutProduct_MediasInput>>>;
  upsert?: Maybe<Array<Maybe<MediaUpsertWithWhereUniqueWithoutProduct_MediasInput>>>;
};

export type MediaUpdateOneWithoutExhibitor_For_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutExhibitor_For_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutExhibitor_For_LogoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MediaUncheckedUpdateWithoutExhibitor_For_LogoInput>;
  upsert?: Maybe<MediaUpsertWithoutExhibitor_For_LogoInput>;
};

export type MediaUpdateOneWithoutExhibitor_For_Main_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutExhibitor_For_Main_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutExhibitor_For_Main_LogoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MediaUncheckedUpdateWithoutExhibitor_For_Main_LogoInput>;
  upsert?: Maybe<MediaUpsertWithoutExhibitor_For_Main_LogoInput>;
};

export type MediaUpdateOneWithoutPartnerInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutPartnerInput>;
  create?: Maybe<MediaUncheckedCreateWithoutPartnerInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MediaUncheckedUpdateWithoutPartnerInput>;
  upsert?: Maybe<MediaUpsertWithoutPartnerInput>;
};

export type MediaUpdateOneWithoutProduct_LogoInput = {
  connect?: Maybe<MediaWhereUniqueInput>;
  connectOrCreate?: Maybe<MediaCreateOrConnectWithoutProduct_LogoInput>;
  create?: Maybe<MediaUncheckedCreateWithoutProduct_LogoInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MediaUncheckedUpdateWithoutProduct_LogoInput>;
  upsert?: Maybe<MediaUpsertWithoutProduct_LogoInput>;
};

export type MediaUpdateWithWhereUniqueWithoutFeedbackInput = {
  data: MediaUncheckedUpdateWithoutFeedbackInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithWhereUniqueWithoutProduct_MediasInput = {
  data: MediaUncheckedUpdateWithoutProduct_MediasInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithoutExhibitor_For_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutExhibitor_For_Main_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutFeedbackInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutPartnerInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutProduct_LogoInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_medias?: Maybe<ProductUpdateManyWithoutMediasInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpdateWithoutProduct_MediasInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  exhibitor_for_logo?: Maybe<ExhibitorUpdateManyWithoutLogoInput>;
  exhibitor_for_main_logo?: Maybe<ExhibitorUpdateManyWithoutMain_MediaInput>;
  feedback?: Maybe<FeedbackUpdateManyWithoutMediasInput>;
  isApproved?: Maybe<BoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  partner?: Maybe<PartnerUpdateManyWithoutLogoInput>;
  product_logo?: Maybe<ProductUpdateManyWithoutVideoInput>;
  type?: Maybe<EnumMediaTypeFieldUpdateOperationsInput>;
  url?: Maybe<StringFieldUpdateOperationsInput>;
};

export type MediaUpsertWithWhereUniqueWithoutFeedbackInput = {
  create: MediaUncheckedCreateWithoutFeedbackInput;
  update: MediaUncheckedUpdateWithoutFeedbackInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpsertWithWhereUniqueWithoutProduct_MediasInput = {
  create: MediaUncheckedCreateWithoutProduct_MediasInput;
  update: MediaUncheckedUpdateWithoutProduct_MediasInput;
  where: MediaWhereUniqueInput;
};

export type MediaUpsertWithoutExhibitor_For_LogoInput = {
  create: MediaUncheckedCreateWithoutExhibitor_For_LogoInput;
  update: MediaUncheckedUpdateWithoutExhibitor_For_LogoInput;
};

export type MediaUpsertWithoutExhibitor_For_Main_LogoInput = {
  create: MediaUncheckedCreateWithoutExhibitor_For_Main_LogoInput;
  update: MediaUncheckedUpdateWithoutExhibitor_For_Main_LogoInput;
};

export type MediaUpsertWithoutPartnerInput = {
  create: MediaUncheckedCreateWithoutPartnerInput;
  update: MediaUncheckedUpdateWithoutPartnerInput;
};

export type MediaUpsertWithoutProduct_LogoInput = {
  create: MediaUncheckedCreateWithoutProduct_LogoInput;
  update: MediaUncheckedUpdateWithoutProduct_LogoInput;
};

export type MediaWhereInput = {
  AND?: Maybe<Array<Maybe<MediaWhereInput>>>;
  NOT?: Maybe<Array<Maybe<MediaWhereInput>>>;
  OR?: Maybe<Array<Maybe<MediaWhereInput>>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  exhibitor_for_logo?: Maybe<ExhibitorListRelationFilter>;
  exhibitor_for_main_logo?: Maybe<ExhibitorListRelationFilter>;
  feedback?: Maybe<FeedbackListRelationFilter>;
  id?: Maybe<IntFilter>;
  isApproved?: Maybe<BoolFilter>;
  is_moderate?: Maybe<BoolFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  partner?: Maybe<PartnerListRelationFilter>;
  product_logo?: Maybe<ProductListRelationFilter>;
  product_medias?: Maybe<ProductListRelationFilter>;
  type?: Maybe<EnumMediaTypeFilter>;
  url?: Maybe<StringFilter>;
};

export type MediaWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export enum MetaTagsEnum {
  Author = 'Author',
  Charset = 'Charset',
  ContentType = 'Content_type',
  Copyright = 'Copyright',
  Description = 'Description',
  Keywords = 'Keywords',
  Refresh = 'Refresh',
  Robots = 'Robots',
  Title = 'Title',
  Viewport = 'Viewport'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCase: Case;
  createOneCatalog: Catalog;
  createOneCategory: Category;
  createOneExhibitor: Exhibitor;
  createOneFeedback: Feedback;
  createOneLocation: Location;
  createOneMedia: Media;
  createOnePartner: Partner;
  createOneProduct: Product;
  createOneUser: User;
  deleteManyCase: BatchPayload;
  deleteManyCatalog: BatchPayload;
  deleteManyCategory: BatchPayload;
  deleteManyExhibitor: BatchPayload;
  deleteManyFeedback: BatchPayload;
  deleteManyLocation: BatchPayload;
  deleteManyMedia: BatchPayload;
  deleteManyPartner: BatchPayload;
  deleteManyProduct: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCase?: Maybe<Case>;
  deleteOneCatalog?: Maybe<Catalog>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneExhibitor?: Maybe<Exhibitor>;
  deleteOneFeedback?: Maybe<Feedback>;
  deleteOneLocation?: Maybe<Location>;
  deleteOneMedia?: Maybe<Media>;
  deleteOnePartner?: Maybe<Partner>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneUser?: Maybe<User>;
  updateField: Field;
  updateManyCase: BatchPayload;
  updateManyCatalog: BatchPayload;
  updateManyCategory: BatchPayload;
  updateManyExhibitor: BatchPayload;
  updateManyFeedback: BatchPayload;
  updateManyLocation: BatchPayload;
  updateManyMedia: BatchPayload;
  updateManyPartner: BatchPayload;
  updateManyProduct: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneCase: Case;
  updateOneCatalog: Catalog;
  updateOneCategory: Category;
  updateOneExhibitor: Exhibitor;
  updateOneFeedback: Feedback;
  updateOneLocation: Location;
  updateOneMedia: Media;
  updateOnePartner: Partner;
  updateOneProduct: Product;
  updateOneUser: User;
  upsertOneCase: Case;
  upsertOneCatalog: Catalog;
  upsertOneCategory: Category;
  upsertOneExhibitor: Exhibitor;
  upsertOneFeedback: Feedback;
  upsertOneLocation: Location;
  upsertOneMedia: Media;
  upsertOnePartner: Partner;
  upsertOneProduct: Product;
  upsertOneUser: User;
};


export type MutationCreateOneCaseArgs = {
  data: CaseCreateInput;
};


export type MutationCreateOneCatalogArgs = {
  data: CatalogCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneExhibitorArgs = {
  data: ExhibitorCreateInput;
};


export type MutationCreateOneFeedbackArgs = {
  data: FeedbackCreateInput;
};


export type MutationCreateOneLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateOneMediaArgs = {
  data: MediaCreateInput;
};


export type MutationCreateOnePartnerArgs = {
  data: PartnerCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCaseArgs = {
  where?: Maybe<CaseWhereInput>;
};


export type MutationDeleteManyCatalogArgs = {
  where?: Maybe<CatalogWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationDeleteManyExhibitorArgs = {
  where?: Maybe<ExhibitorWhereInput>;
};


export type MutationDeleteManyFeedbackArgs = {
  where?: Maybe<FeedbackWhereInput>;
};


export type MutationDeleteManyLocationArgs = {
  where?: Maybe<LocationWhereInput>;
};


export type MutationDeleteManyMediaArgs = {
  where?: Maybe<MediaWhereInput>;
};


export type MutationDeleteManyPartnerArgs = {
  where?: Maybe<PartnerWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCaseArgs = {
  where: CaseWhereUniqueInput;
};


export type MutationDeleteOneCatalogArgs = {
  where: CatalogWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneExhibitorArgs = {
  where: ExhibitorWhereUniqueInput;
};


export type MutationDeleteOneFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};


export type MutationDeleteOneLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteOneMediaArgs = {
  where: MediaWhereUniqueInput;
};


export type MutationDeleteOnePartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCaseArgs = {
  data: CaseUpdateManyMutationInput;
  where?: Maybe<CaseWhereInput>;
};


export type MutationUpdateManyCatalogArgs = {
  data: CatalogUpdateManyMutationInput;
  where?: Maybe<CatalogWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateManyExhibitorArgs = {
  data: ExhibitorUpdateManyMutationInput;
  where?: Maybe<ExhibitorWhereInput>;
};


export type MutationUpdateManyFeedbackArgs = {
  data: FeedbackUpdateManyMutationInput;
  where?: Maybe<FeedbackWhereInput>;
};


export type MutationUpdateManyLocationArgs = {
  data: LocationUpdateManyMutationInput;
  where?: Maybe<LocationWhereInput>;
};


export type MutationUpdateManyMediaArgs = {
  data: MediaUpdateManyMutationInput;
  where?: Maybe<MediaWhereInput>;
};


export type MutationUpdateManyPartnerArgs = {
  data: PartnerUpdateManyMutationInput;
  where?: Maybe<PartnerWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneCaseArgs = {
  data: CaseUpdateInput;
  where: CaseWhereUniqueInput;
};


export type MutationUpdateOneCatalogArgs = {
  data: CatalogUpdateInput;
  where: CatalogWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneExhibitorArgs = {
  data: ExhibitorUpdateInput;
  where: ExhibitorWhereUniqueInput;
};


export type MutationUpdateOneFeedbackArgs = {
  data: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpdateOneLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateOneMediaArgs = {
  data: MediaUpdateInput;
  where: MediaWhereUniqueInput;
};


export type MutationUpdateOnePartnerArgs = {
  data: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCaseArgs = {
  create: CaseCreateInput;
  update: CaseUpdateInput;
  where: CaseWhereUniqueInput;
};


export type MutationUpsertOneCatalogArgs = {
  create: CatalogCreateInput;
  update: CatalogUpdateInput;
  where: CatalogWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneExhibitorArgs = {
  create: ExhibitorCreateInput;
  update: ExhibitorUpdateInput;
  where: ExhibitorWhereUniqueInput;
};


export type MutationUpsertOneFeedbackArgs = {
  create: FeedbackCreateInput;
  update: FeedbackUpdateInput;
  where: FeedbackWhereUniqueInput;
};


export type MutationUpsertOneLocationArgs = {
  create: LocationCreateInput;
  update: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpsertOneMediaArgs = {
  create: MediaCreateInput;
  update: MediaUpdateInput;
  where: MediaWhereUniqueInput;
};


export type MutationUpsertOnePartnerArgs = {
  create: PartnerCreateInput;
  update: PartnerUpdateInput;
  where: PartnerWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedEnumConnectionTypeEnumNullableFilter = {
  equals?: Maybe<ConnectionTypeEnum>;
  in?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
  not?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  notIn?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
};

export type NestedEnumConnectionTypeEnumNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  _min?: Maybe<NestedEnumConnectionTypeEnumNullableFilter>;
  equals?: Maybe<ConnectionTypeEnum>;
  in?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
  not?: Maybe<NestedEnumConnectionTypeEnumNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ConnectionTypeEnum>>>;
};

export type NestedEnumExhibitorCategoryEnumFilter = {
  equals?: Maybe<ExhibitorCategoryEnum>;
  in?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
  not?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  notIn?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
};

export type NestedEnumExhibitorCategoryEnumWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  _min?: Maybe<NestedEnumExhibitorCategoryEnumFilter>;
  equals?: Maybe<ExhibitorCategoryEnum>;
  in?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
  not?: Maybe<NestedEnumExhibitorCategoryEnumWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ExhibitorCategoryEnum>>>;
};

export type NestedEnumMediaTypeFilter = {
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type NestedEnumMediaTypeNullableFilter = {
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeNullableFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type NestedEnumMediaTypeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumMediaTypeNullableFilter>;
  _min?: Maybe<NestedEnumMediaTypeNullableFilter>;
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type NestedEnumMediaTypeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumMediaTypeFilter>;
  _min?: Maybe<NestedEnumMediaTypeFilter>;
  equals?: Maybe<MediaType>;
  in?: Maybe<Array<Maybe<MediaType>>>;
  not?: Maybe<NestedEnumMediaTypeWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<MediaType>>>;
};

export type NestedEnumProductTypeEnumNullableFilter = {
  equals?: Maybe<ProductTypeEnum>;
  in?: Maybe<Array<Maybe<ProductTypeEnum>>>;
  not?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  notIn?: Maybe<Array<Maybe<ProductTypeEnum>>>;
};

export type NestedEnumProductTypeEnumNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  _min?: Maybe<NestedEnumProductTypeEnumNullableFilter>;
  equals?: Maybe<ProductTypeEnum>;
  in?: Maybe<Array<Maybe<ProductTypeEnum>>>;
  not?: Maybe<NestedEnumProductTypeEnumNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<ProductTypeEnum>>>;
};

export type NestedEnumVisibleCostEnumFilter = {
  equals?: Maybe<VisibleCostEnum>;
  in?: Maybe<Array<Maybe<VisibleCostEnum>>>;
  not?: Maybe<NestedEnumVisibleCostEnumFilter>;
  notIn?: Maybe<Array<Maybe<VisibleCostEnum>>>;
};

export type NestedEnumVisibleCostEnumWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumVisibleCostEnumFilter>;
  _min?: Maybe<NestedEnumVisibleCostEnumFilter>;
  equals?: Maybe<VisibleCostEnum>;
  in?: Maybe<Array<Maybe<VisibleCostEnum>>>;
  not?: Maybe<NestedEnumVisibleCostEnumWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<VisibleCostEnum>>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedFloatNullableFilter>;
  _min?: Maybe<NestedFloatNullableFilter>;
  _sum?: Maybe<NestedFloatNullableFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableEnumConnectionTypeEnumFieldUpdateOperationsInput = {
  set?: Maybe<ConnectionTypeEnum>;
};

export type NullableEnumMediaTypeFieldUpdateOperationsInput = {
  set?: Maybe<MediaType>;
};

export type NullableEnumProductTypeEnumFieldUpdateOperationsInput = {
  set?: Maybe<ProductTypeEnum>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Partner = {
  __typename?: 'Partner';
  display_order?: Maybe<Scalars['Int']>;
  exhibitor: Exhibitor;
  exhibitorId: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Boolean'];
  is_published?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Media>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
};

export type PartnerAvgAggregateOutputType = {
  __typename?: 'PartnerAvgAggregateOutputType';
  display_order?: Maybe<Scalars['Float']>;
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mediaId?: Maybe<Scalars['Float']>;
};

export type PartnerAvgOrderByAggregateInput = {
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
};

export type PartnerCountAggregateOutputType = {
  __typename?: 'PartnerCountAggregateOutputType';
  _all: Scalars['Int'];
  display_order: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  id: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_published: Scalars['Int'];
  mediaId: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  name: Scalars['Int'];
};

export type PartnerCountOrderByAggregateInput = {
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PartnerCreateInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitor: ExhibitorCreateNestedOneWithoutPartnersInput;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<MediaCreateNestedOneWithoutPartnerInput>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerCreateManyExhibitorInput = {
  display_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerCreateManyExhibitorInputEnvelope = {
  data: PartnerCreateManyExhibitorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PartnerCreateManyInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerCreateManyLogoInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerCreateManyLogoInputEnvelope = {
  data: PartnerCreateManyLogoInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PartnerCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<PartnerCreateManyExhibitorInputEnvelope>;
};

export type PartnerCreateNestedManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutLogoInput>>>;
  createMany?: Maybe<PartnerCreateManyLogoInputEnvelope>;
};

export type PartnerCreateOrConnectWithoutExhibitorInput = {
  create: PartnerUncheckedCreateWithoutExhibitorInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerCreateOrConnectWithoutLogoInput = {
  create: PartnerUncheckedCreateWithoutLogoInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerCreateWithoutExhibitorInput = {
  display_order?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<MediaCreateNestedOneWithoutPartnerInput>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerCreateWithoutLogoInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitor: ExhibitorCreateNestedOneWithoutPartnersInput;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerListRelationFilter = {
  every?: Maybe<PartnerWhereInput>;
  none?: Maybe<PartnerWhereInput>;
  some?: Maybe<PartnerWhereInput>;
};

export type PartnerMaxAggregateOutputType = {
  __typename?: 'PartnerMaxAggregateOutputType';
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerMaxOrderByAggregateInput = {
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PartnerMinAggregateOutputType = {
  __typename?: 'PartnerMinAggregateOutputType';
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerMinOrderByAggregateInput = {
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PartnerOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type PartnerOrderByWithAggregationInput = {
  _avg?: Maybe<PartnerAvgOrderByAggregateInput>;
  _count?: Maybe<PartnerCountOrderByAggregateInput>;
  _max?: Maybe<PartnerMaxOrderByAggregateInput>;
  _min?: Maybe<PartnerMinOrderByAggregateInput>;
  _sum?: Maybe<PartnerSumOrderByAggregateInput>;
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type PartnerOrderByWithRelationInput = {
  display_order?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  logo?: Maybe<MediaOrderByWithRelationInput>;
  mediaId?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export enum PartnerScalarFieldEnum {
  DisplayOrder = 'display_order',
  ExhibitorId = 'exhibitorId',
  Id = 'id',
  IsModerate = 'is_moderate',
  IsPublished = 'is_published',
  MediaId = 'mediaId',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Name = 'name'
}

export type PartnerScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  display_order?: Maybe<IntNullableFilter>;
  exhibitorId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  mediaId?: Maybe<IntNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
};

export type PartnerScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<PartnerScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<PartnerScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<PartnerScalarWhereWithAggregatesInput>>>;
  display_order?: Maybe<IntNullableWithAggregatesFilter>;
  exhibitorId?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_published?: Maybe<BoolNullableWithAggregatesFilter>;
  mediaId?: Maybe<IntNullableWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
};

export type PartnerSumAggregateOutputType = {
  __typename?: 'PartnerSumAggregateOutputType';
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
};

export type PartnerSumOrderByAggregateInput = {
  display_order?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
};

export type PartnerUncheckedCreateInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerUncheckedCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<PartnerCreateManyExhibitorInputEnvelope>;
};

export type PartnerUncheckedCreateNestedManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutLogoInput>>>;
  createMany?: Maybe<PartnerCreateManyLogoInputEnvelope>;
};

export type PartnerUncheckedCreateWithoutExhibitorInput = {
  display_order?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  mediaId?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerUncheckedCreateWithoutLogoInput = {
  display_order?: Maybe<Scalars['Int']>;
  exhibitorId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type PartnerUncheckedUpdateInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUncheckedUpdateManyInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUncheckedUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<PartnerCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PartnerUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<PartnerUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<PartnerUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type PartnerUncheckedUpdateManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutLogoInput>>>;
  createMany?: Maybe<PartnerCreateManyLogoInputEnvelope>;
  delete?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PartnerUpdateWithWhereUniqueWithoutLogoInput>>>;
  updateMany?: Maybe<Array<Maybe<PartnerUpdateManyWithWhereWithoutLogoInput>>>;
  upsert?: Maybe<Array<Maybe<PartnerUpsertWithWhereUniqueWithoutLogoInput>>>;
};

export type PartnerUncheckedUpdateManyWithoutPartnerInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUncheckedUpdateManyWithoutPartnersInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUncheckedUpdateWithoutExhibitorInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUncheckedUpdateWithoutLogoInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<IntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUpdateInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneRequiredWithoutPartnersInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutPartnerInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUpdateManyMutationInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUpdateManyWithWhereWithoutExhibitorInput = {
  data: PartnerUncheckedUpdateManyWithoutPartnersInput;
  where: PartnerScalarWhereInput;
};

export type PartnerUpdateManyWithWhereWithoutLogoInput = {
  data: PartnerUncheckedUpdateManyWithoutPartnerInput;
  where: PartnerScalarWhereInput;
};

export type PartnerUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<PartnerCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PartnerUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<PartnerUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<PartnerUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type PartnerUpdateManyWithoutLogoInput = {
  connect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PartnerCreateOrConnectWithoutLogoInput>>>;
  create?: Maybe<Array<Maybe<PartnerCreateWithoutLogoInput>>>;
  createMany?: Maybe<PartnerCreateManyLogoInputEnvelope>;
  delete?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PartnerScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PartnerWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PartnerUpdateWithWhereUniqueWithoutLogoInput>>>;
  updateMany?: Maybe<Array<Maybe<PartnerUpdateManyWithWhereWithoutLogoInput>>>;
  upsert?: Maybe<Array<Maybe<PartnerUpsertWithWhereUniqueWithoutLogoInput>>>;
};

export type PartnerUpdateWithWhereUniqueWithoutExhibitorInput = {
  data: PartnerUncheckedUpdateWithoutExhibitorInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpdateWithWhereUniqueWithoutLogoInput = {
  data: PartnerUncheckedUpdateWithoutLogoInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpdateWithoutExhibitorInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  logo?: Maybe<MediaUpdateOneWithoutPartnerInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUpdateWithoutLogoInput = {
  display_order?: Maybe<NullableIntFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneRequiredWithoutPartnersInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PartnerUpsertWithWhereUniqueWithoutExhibitorInput = {
  create: PartnerUncheckedCreateWithoutExhibitorInput;
  update: PartnerUncheckedUpdateWithoutExhibitorInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerUpsertWithWhereUniqueWithoutLogoInput = {
  create: PartnerUncheckedCreateWithoutLogoInput;
  update: PartnerUncheckedUpdateWithoutLogoInput;
  where: PartnerWhereUniqueInput;
};

export type PartnerWhereInput = {
  AND?: Maybe<Array<Maybe<PartnerWhereInput>>>;
  NOT?: Maybe<Array<Maybe<PartnerWhereInput>>>;
  OR?: Maybe<Array<Maybe<PartnerWhereInput>>>;
  display_order?: Maybe<IntNullableFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  exhibitorId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  logo?: Maybe<MediaWhereInput>;
  mediaId?: Maybe<IntNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
};

export type PartnerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PaymentMethodEnum {
  Cash = 'cash',
  NonCash = 'non_cash'
}

export enum PossibilityOfPurchaseEnum {
  Retail = 'retail',
  Wholesale = 'wholesale'
}

export type Product = {
  __typename?: 'Product';
  Catalog?: Maybe<Catalog>;
  _count: ProductCountOutputType;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt: Scalars['DateTime'];
  delivery_method: Array<DeliveryMethodEnum>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<Exhibitor>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate: Scalars['Boolean'];
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  medias: Array<Media>;
  meta_tags: Array<MetaTagsEnum>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  payment_method: Array<PaymentMethodEnum>;
  possibility_of_purchase: Array<PossibilityOfPurchaseEnum>;
  standards: Array<StandardEnum>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<Media>;
};


export type ProductMediasArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  distinct?: Maybe<MediaScalarFieldEnum>;
  orderBy?: Maybe<MediaOrderByWithRelationInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};

export type ProductAvgAggregateOutputType = {
  __typename?: 'ProductAvgAggregateOutputType';
  catalogId?: Maybe<Scalars['Float']>;
  categoryId?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  exhibitorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mediaId?: Maybe<Scalars['Float']>;
  min_batch?: Maybe<Scalars['Float']>;
};

export type ProductAvgOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
};

export type ProductCountAggregateOutputType = {
  __typename?: 'ProductCountAggregateOutputType';
  _all: Scalars['Int'];
  analogs: Scalars['Int'];
  brand: Scalars['Int'];
  catalogId: Scalars['Int'];
  categoryId: Scalars['Int'];
  cost: Scalars['Int'];
  createdAt: Scalars['Int'];
  delivery_method: Scalars['Int'];
  description: Scalars['Int'];
  exhibitorId: Scalars['Int'];
  id: Scalars['Int'];
  is_import_substitution: Scalars['Int'];
  is_moderate: Scalars['Int'];
  is_published: Scalars['Int'];
  manufacturer: Scalars['Int'];
  mediaId: Scalars['Int'];
  meta_tags: Scalars['Int'];
  min_batch: Scalars['Int'];
  moderate_message: Scalars['Int'];
  moderate_verdict: Scalars['Int'];
  name: Scalars['Int'];
  payment_method: Scalars['Int'];
  possibility_of_purchase: Scalars['Int'];
  standards: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  analogs?: Maybe<SortOrder>;
  brand?: Maybe<SortOrder>;
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  delivery_method?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  manufacturer?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  meta_tags?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  payment_method?: Maybe<SortOrder>;
  possibility_of_purchase?: Maybe<SortOrder>;
  standards?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductCountOutputType = {
  __typename?: 'ProductCountOutputType';
  medias: Scalars['Int'];
};

export type ProductCreateInput = {
  Catalog?: Maybe<CatalogCreateNestedOneWithoutProductsInput>;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryCreateNestedOneWithoutProductInput>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutProductsInput>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  medias?: Maybe<MediaCreateNestedManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<MediaCreateNestedOneWithoutProduct_LogoInput>;
};

export type ProductCreateManyCatalogInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyCatalogInputEnvelope = {
  data: ProductCreateManyCatalogInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManyCategoryInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyCategoryInputEnvelope = {
  data: ProductCreateManyCategoryInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManyExhibitorInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyExhibitorInputEnvelope = {
  data: ProductCreateManyExhibitorInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManyInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyVideoInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreateManyVideoInputEnvelope = {
  data: ProductCreateManyVideoInput;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProductCreateManydelivery_MethodInput = {
  set: DeliveryMethodEnum;
};

export type ProductCreateManymeta_TagsInput = {
  set: MetaTagsEnum;
};

export type ProductCreateManypayment_MethodInput = {
  set: PaymentMethodEnum;
};

export type ProductCreateManypossibility_Of_PurchaseInput = {
  set: PossibilityOfPurchaseEnum;
};

export type ProductCreateManystandardsInput = {
  set: StandardEnum;
};

export type ProductCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ProductCreateManyCatalogInputEnvelope>;
};

export type ProductCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCategoryInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCategoryInput>>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<ProductCreateManyExhibitorInputEnvelope>;
};

export type ProductCreateNestedManyWithoutMediasInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutMediasInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutMediasInput>>>;
};

export type ProductCreateNestedManyWithoutVideoInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutVideoInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutVideoInput>>>;
  createMany?: Maybe<ProductCreateManyVideoInputEnvelope>;
};

export type ProductCreateOrConnectWithoutCatalogInput = {
  create: ProductUncheckedCreateWithoutCatalogInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutCategoryInput = {
  create: ProductUncheckedCreateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutExhibitorInput = {
  create: ProductUncheckedCreateWithoutExhibitorInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutMediasInput = {
  create: ProductUncheckedCreateWithoutMediasInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutVideoInput = {
  create: ProductUncheckedCreateWithoutVideoInput;
  where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutCatalogInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryCreateNestedOneWithoutProductInput>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutProductsInput>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  medias?: Maybe<MediaCreateNestedManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<MediaCreateNestedOneWithoutProduct_LogoInput>;
};

export type ProductCreateWithoutCategoryInput = {
  Catalog?: Maybe<CatalogCreateNestedOneWithoutProductsInput>;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutProductsInput>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  medias?: Maybe<MediaCreateNestedManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<MediaCreateNestedOneWithoutProduct_LogoInput>;
};

export type ProductCreateWithoutExhibitorInput = {
  Catalog?: Maybe<CatalogCreateNestedOneWithoutProductsInput>;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryCreateNestedOneWithoutProductInput>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  medias?: Maybe<MediaCreateNestedManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<MediaCreateNestedOneWithoutProduct_LogoInput>;
};

export type ProductCreateWithoutMediasInput = {
  Catalog?: Maybe<CatalogCreateNestedOneWithoutProductsInput>;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryCreateNestedOneWithoutProductInput>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutProductsInput>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<MediaCreateNestedOneWithoutProduct_LogoInput>;
};

export type ProductCreateWithoutVideoInput = {
  Catalog?: Maybe<CatalogCreateNestedOneWithoutProductsInput>;
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  category?: Maybe<CategoryCreateNestedOneWithoutProductInput>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutProductsInput>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  medias?: Maybe<MediaCreateNestedManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCreatedelivery_MethodInput = {
  set: DeliveryMethodEnum;
};

export type ProductCreatemeta_TagsInput = {
  set: MetaTagsEnum;
};

export type ProductCreatepayment_MethodInput = {
  set: PaymentMethodEnum;
};

export type ProductCreatepossibility_Of_PurchaseInput = {
  set: PossibilityOfPurchaseEnum;
};

export type ProductCreatestandardsInput = {
  set: StandardEnum;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregateOutputType = {
  __typename?: 'ProductMaxAggregateOutputType';
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMaxOrderByAggregateInput = {
  analogs?: Maybe<SortOrder>;
  brand?: Maybe<SortOrder>;
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  manufacturer?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductMinAggregateOutputType = {
  __typename?: 'ProductMinAggregateOutputType';
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinOrderByAggregateInput = {
  analogs?: Maybe<SortOrder>;
  brand?: Maybe<SortOrder>;
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  manufacturer?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _avg?: Maybe<ProductAvgOrderByAggregateInput>;
  _count?: Maybe<ProductCountOrderByAggregateInput>;
  _max?: Maybe<ProductMaxOrderByAggregateInput>;
  _min?: Maybe<ProductMinOrderByAggregateInput>;
  _sum?: Maybe<ProductSumOrderByAggregateInput>;
  analogs?: Maybe<SortOrder>;
  brand?: Maybe<SortOrder>;
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  delivery_method?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  manufacturer?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  meta_tags?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  payment_method?: Maybe<SortOrder>;
  possibility_of_purchase?: Maybe<SortOrder>;
  standards?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  Catalog?: Maybe<CatalogOrderByWithRelationInput>;
  analogs?: Maybe<SortOrder>;
  brand?: Maybe<SortOrder>;
  catalogId?: Maybe<SortOrder>;
  category?: Maybe<CategoryOrderByWithRelationInput>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  delivery_method?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  is_import_substitution?: Maybe<SortOrder>;
  is_moderate?: Maybe<SortOrder>;
  is_published?: Maybe<SortOrder>;
  manufacturer?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  medias?: Maybe<MediaOrderByRelationAggregateInput>;
  meta_tags?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
  moderate_message?: Maybe<SortOrder>;
  moderate_verdict?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  payment_method?: Maybe<SortOrder>;
  possibility_of_purchase?: Maybe<SortOrder>;
  standards?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  video?: Maybe<MediaOrderByWithRelationInput>;
};

export enum ProductScalarFieldEnum {
  Analogs = 'analogs',
  Brand = 'brand',
  CatalogId = 'catalogId',
  CategoryId = 'categoryId',
  Cost = 'cost',
  CreatedAt = 'createdAt',
  DeliveryMethod = 'delivery_method',
  Description = 'description',
  ExhibitorId = 'exhibitorId',
  Id = 'id',
  IsImportSubstitution = 'is_import_substitution',
  IsModerate = 'is_moderate',
  IsPublished = 'is_published',
  Manufacturer = 'manufacturer',
  MediaId = 'mediaId',
  MetaTags = 'meta_tags',
  MinBatch = 'min_batch',
  ModerateMessage = 'moderate_message',
  ModerateVerdict = 'moderate_verdict',
  Name = 'name',
  PaymentMethod = 'payment_method',
  PossibilityOfPurchase = 'possibility_of_purchase',
  Standards = 'standards',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  analogs?: Maybe<StringNullableFilter>;
  brand?: Maybe<StringNullableFilter>;
  catalogId?: Maybe<IntNullableFilter>;
  categoryId?: Maybe<IntNullableFilter>;
  cost?: Maybe<FloatNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  delivery_method?: Maybe<EnumDeliveryMethodEnumNullableListFilter>;
  description?: Maybe<StringNullableFilter>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  manufacturer?: Maybe<StringNullableFilter>;
  mediaId?: Maybe<IntNullableFilter>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  min_batch?: Maybe<IntNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  payment_method?: Maybe<EnumPaymentMethodEnumNullableListFilter>;
  possibility_of_purchase?: Maybe<EnumPossibilityOfPurchaseEnumNullableListFilter>;
  standards?: Maybe<EnumStandardEnumNullableListFilter>;
  type?: Maybe<EnumProductTypeEnumNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<ProductScalarWhereWithAggregatesInput>>>;
  analogs?: Maybe<StringNullableWithAggregatesFilter>;
  brand?: Maybe<StringNullableWithAggregatesFilter>;
  catalogId?: Maybe<IntNullableWithAggregatesFilter>;
  categoryId?: Maybe<IntNullableWithAggregatesFilter>;
  cost?: Maybe<FloatNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  delivery_method?: Maybe<EnumDeliveryMethodEnumNullableListFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  exhibitorId?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  is_import_substitution?: Maybe<BoolNullableWithAggregatesFilter>;
  is_moderate?: Maybe<BoolWithAggregatesFilter>;
  is_published?: Maybe<BoolNullableWithAggregatesFilter>;
  manufacturer?: Maybe<StringNullableWithAggregatesFilter>;
  mediaId?: Maybe<IntNullableWithAggregatesFilter>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  min_batch?: Maybe<IntNullableWithAggregatesFilter>;
  moderate_message?: Maybe<StringNullableWithAggregatesFilter>;
  moderate_verdict?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  payment_method?: Maybe<EnumPaymentMethodEnumNullableListFilter>;
  possibility_of_purchase?: Maybe<EnumPossibilityOfPurchaseEnumNullableListFilter>;
  standards?: Maybe<EnumStandardEnumNullableListFilter>;
  type?: Maybe<EnumProductTypeEnumNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ProductSumAggregateOutputType = {
  __typename?: 'ProductSumAggregateOutputType';
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['Int']>;
  min_batch?: Maybe<Scalars['Int']>;
};

export type ProductSumOrderByAggregateInput = {
  catalogId?: Maybe<SortOrder>;
  categoryId?: Maybe<SortOrder>;
  cost?: Maybe<SortOrder>;
  exhibitorId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  mediaId?: Maybe<SortOrder>;
  min_batch?: Maybe<SortOrder>;
};

export enum ProductTypeEnum {
  Product = 'product',
  Service = 'service'
}

export type ProductUncheckedCreateInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedCreateNestedManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ProductCreateManyCatalogInputEnvelope>;
};

export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCategoryInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCategoryInput>>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
};

export type ProductUncheckedCreateNestedManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<ProductCreateManyExhibitorInputEnvelope>;
};

export type ProductUncheckedCreateNestedManyWithoutVideoInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutVideoInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutVideoInput>>>;
  createMany?: Maybe<ProductCreateManyVideoInputEnvelope>;
};

export type ProductUncheckedCreateWithoutCatalogInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedCreateWithoutCategoryInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedCreateWithoutExhibitorInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedCreateWithoutMediasInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['Int']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedCreateWithoutVideoInput = {
  analogs?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  catalogId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<Scalars['String']>;
  exhibitorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_import_substitution?: Maybe<Scalars['Boolean']>;
  is_moderate?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  manufacturer?: Maybe<Scalars['String']>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<Scalars['Int']>;
  moderate_message?: Maybe<Scalars['String']>;
  moderate_verdict?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<ProductTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductUncheckedUpdateInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ProductCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type ProductUncheckedUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCategoryInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCategoryInput>>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutCategoryInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutCategoryInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutCategoryInput>>>;
};

export type ProductUncheckedUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<ProductCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type ProductUncheckedUpdateManyWithoutProductInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutProduct_LogoInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutProduct_MediasInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutProductsInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateManyWithoutVideoInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutVideoInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutVideoInput>>>;
  createMany?: Maybe<ProductCreateManyVideoInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutVideoInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutVideoInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutVideoInput>>>;
};

export type ProductUncheckedUpdateWithoutCatalogInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutCategoryInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutExhibitorInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutMediasInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  mediaId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUncheckedUpdateWithoutVideoInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  catalogId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  categoryId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitorId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateInput = {
  Catalog?: Maybe<CatalogUpdateOneWithoutProductsInput>;
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneWithoutProductInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutProductsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video?: Maybe<MediaUpdateOneWithoutProduct_LogoInput>;
};

export type ProductUpdateManyMutationInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdateManyWithWhereWithoutCatalogInput = {
  data: ProductUncheckedUpdateManyWithoutProductsInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutCategoryInput = {
  data: ProductUncheckedUpdateManyWithoutProductInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutExhibitorInput = {
  data: ProductUncheckedUpdateManyWithoutProductsInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutMediasInput = {
  data: ProductUncheckedUpdateManyWithoutProduct_MediasInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithWhereWithoutVideoInput = {
  data: ProductUncheckedUpdateManyWithoutProduct_LogoInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutCatalogInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCatalogInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCatalogInput>>>;
  createMany?: Maybe<ProductCreateManyCatalogInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutCatalogInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutCatalogInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutCatalogInput>>>;
};

export type ProductUpdateManyWithoutCategoryInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutCategoryInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutCategoryInput>>>;
  createMany?: Maybe<ProductCreateManyCategoryInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutCategoryInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutCategoryInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutCategoryInput>>>;
};

export type ProductUpdateManyWithoutExhibitorInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutExhibitorInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutExhibitorInput>>>;
  createMany?: Maybe<ProductCreateManyExhibitorInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutExhibitorInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutExhibitorInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutExhibitorInput>>>;
};

export type ProductUpdateManyWithoutMediasInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutMediasInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutMediasInput>>>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutMediasInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutMediasInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutMediasInput>>>;
};

export type ProductUpdateManyWithoutVideoInput = {
  connect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<ProductCreateOrConnectWithoutVideoInput>>>;
  create?: Maybe<Array<Maybe<ProductCreateWithoutVideoInput>>>;
  createMany?: Maybe<ProductCreateManyVideoInputEnvelope>;
  delete?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<ProductScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<ProductWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<ProductUpdateWithWhereUniqueWithoutVideoInput>>>;
  updateMany?: Maybe<Array<Maybe<ProductUpdateManyWithWhereWithoutVideoInput>>>;
  upsert?: Maybe<Array<Maybe<ProductUpsertWithWhereUniqueWithoutVideoInput>>>;
};

export type ProductUpdateWithWhereUniqueWithoutCatalogInput = {
  data: ProductUncheckedUpdateWithoutCatalogInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
  data: ProductUncheckedUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutExhibitorInput = {
  data: ProductUncheckedUpdateWithoutExhibitorInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutMediasInput = {
  data: ProductUncheckedUpdateWithoutMediasInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutVideoInput = {
  data: ProductUncheckedUpdateWithoutVideoInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutCatalogInput = {
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneWithoutProductInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutProductsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video?: Maybe<MediaUpdateOneWithoutProduct_LogoInput>;
};

export type ProductUpdateWithoutCategoryInput = {
  Catalog?: Maybe<CatalogUpdateOneWithoutProductsInput>;
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutProductsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video?: Maybe<MediaUpdateOneWithoutProduct_LogoInput>;
};

export type ProductUpdateWithoutExhibitorInput = {
  Catalog?: Maybe<CatalogUpdateOneWithoutProductsInput>;
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneWithoutProductInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video?: Maybe<MediaUpdateOneWithoutProduct_LogoInput>;
};

export type ProductUpdateWithoutMediasInput = {
  Catalog?: Maybe<CatalogUpdateOneWithoutProductsInput>;
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneWithoutProductInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutProductsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  video?: Maybe<MediaUpdateOneWithoutProduct_LogoInput>;
};

export type ProductUpdateWithoutVideoInput = {
  Catalog?: Maybe<CatalogUpdateOneWithoutProductsInput>;
  analogs?: Maybe<NullableStringFieldUpdateOperationsInput>;
  brand?: Maybe<NullableStringFieldUpdateOperationsInput>;
  category?: Maybe<CategoryUpdateOneWithoutProductInput>;
  cost?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  delivery_method?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutProductsInput>;
  is_import_substitution?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  is_moderate?: Maybe<BoolFieldUpdateOperationsInput>;
  is_published?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  manufacturer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  medias?: Maybe<MediaUpdateManyWithoutProduct_MediasInput>;
  meta_tags?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  min_batch?: Maybe<NullableIntFieldUpdateOperationsInput>;
  moderate_message?: Maybe<NullableStringFieldUpdateOperationsInput>;
  moderate_verdict?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  payment_method?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  possibility_of_purchase?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  standards?: Maybe<Array<Maybe<StandardEnum>>>;
  type?: Maybe<NullableEnumProductTypeEnumFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProductUpdatedelivery_MethodInput = {
  push?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
  set?: Maybe<Array<Maybe<DeliveryMethodEnum>>>;
};

export type ProductUpdatemeta_TagsInput = {
  push?: Maybe<Array<Maybe<MetaTagsEnum>>>;
  set?: Maybe<Array<Maybe<MetaTagsEnum>>>;
};

export type ProductUpdatepayment_MethodInput = {
  push?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
  set?: Maybe<Array<Maybe<PaymentMethodEnum>>>;
};

export type ProductUpdatepossibility_Of_PurchaseInput = {
  push?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
  set?: Maybe<Array<Maybe<PossibilityOfPurchaseEnum>>>;
};

export type ProductUpdatestandardsInput = {
  push?: Maybe<Array<Maybe<StandardEnum>>>;
  set?: Maybe<Array<Maybe<StandardEnum>>>;
};

export type ProductUpsertWithWhereUniqueWithoutCatalogInput = {
  create: ProductUncheckedCreateWithoutCatalogInput;
  update: ProductUncheckedUpdateWithoutCatalogInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
  create: ProductUncheckedCreateWithoutCategoryInput;
  update: ProductUncheckedUpdateWithoutCategoryInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutExhibitorInput = {
  create: ProductUncheckedCreateWithoutExhibitorInput;
  update: ProductUncheckedUpdateWithoutExhibitorInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutMediasInput = {
  create: ProductUncheckedCreateWithoutMediasInput;
  update: ProductUncheckedUpdateWithoutMediasInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutVideoInput = {
  create: ProductUncheckedCreateWithoutVideoInput;
  update: ProductUncheckedUpdateWithoutVideoInput;
  where: ProductWhereUniqueInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  Catalog?: Maybe<CatalogWhereInput>;
  NOT?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  analogs?: Maybe<StringNullableFilter>;
  brand?: Maybe<StringNullableFilter>;
  catalogId?: Maybe<IntNullableFilter>;
  category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<IntNullableFilter>;
  cost?: Maybe<FloatNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  delivery_method?: Maybe<EnumDeliveryMethodEnumNullableListFilter>;
  description?: Maybe<StringNullableFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  exhibitorId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  is_import_substitution?: Maybe<BoolNullableFilter>;
  is_moderate?: Maybe<BoolFilter>;
  is_published?: Maybe<BoolNullableFilter>;
  manufacturer?: Maybe<StringNullableFilter>;
  mediaId?: Maybe<IntNullableFilter>;
  medias?: Maybe<MediaListRelationFilter>;
  meta_tags?: Maybe<EnumMetaTagsEnumNullableListFilter>;
  min_batch?: Maybe<IntNullableFilter>;
  moderate_message?: Maybe<StringNullableFilter>;
  moderate_verdict?: Maybe<BoolFilter>;
  name?: Maybe<StringNullableFilter>;
  payment_method?: Maybe<EnumPaymentMethodEnumNullableListFilter>;
  possibility_of_purchase?: Maybe<EnumPossibilityOfPurchaseEnumNullableListFilter>;
  standards?: Maybe<EnumStandardEnumNullableListFilter>;
  type?: Maybe<EnumProductTypeEnumNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  video?: Maybe<MediaWhereInput>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCase?: Maybe<AggregateCase>;
  aggregateCatalog?: Maybe<AggregateCatalog>;
  aggregateCategory?: Maybe<AggregateCategory>;
  aggregateExhibitor?: Maybe<AggregateExhibitor>;
  aggregateFeedback?: Maybe<AggregateFeedback>;
  aggregateLocation?: Maybe<AggregateLocation>;
  aggregateMedia?: Maybe<AggregateMedia>;
  aggregatePartner?: Maybe<AggregatePartner>;
  aggregateProduct?: Maybe<AggregateProduct>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCase?: Maybe<Case>;
  findFirstCatalog?: Maybe<Catalog>;
  findFirstCategory?: Maybe<Category>;
  findFirstExhibitor?: Maybe<Exhibitor>;
  findFirstFeedback?: Maybe<Feedback>;
  findFirstLocation?: Maybe<Location>;
  findFirstMedia?: Maybe<Media>;
  findFirstPartner?: Maybe<Partner>;
  findFirstProduct?: Maybe<Product>;
  findFirstUser?: Maybe<User>;
  findManyCase: Array<Case>;
  findManyCaseCount: Scalars['Int'];
  findManyCatalog: Array<Catalog>;
  findManyCatalogCount: Scalars['Int'];
  findManyCategory: Array<Category>;
  findManyCategoryCount: Scalars['Int'];
  findManyExhibitor: Array<Exhibitor>;
  findManyExhibitorCount: Scalars['Int'];
  findManyFeedback: Array<Feedback>;
  findManyFeedbackCount: Scalars['Int'];
  findManyLocation: Array<Location>;
  findManyLocationCount: Scalars['Int'];
  findManyMedia: Array<Media>;
  findManyMediaCount: Scalars['Int'];
  findManyPartner: Array<Partner>;
  findManyPartnerCount: Scalars['Int'];
  findManyProduct: Array<Product>;
  findManyProductCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCase?: Maybe<Case>;
  findUniqueCatalog?: Maybe<Catalog>;
  findUniqueCategory?: Maybe<Category>;
  findUniqueExhibitor?: Maybe<Exhibitor>;
  findUniqueFeedback?: Maybe<Feedback>;
  findUniqueLocation?: Maybe<Location>;
  findUniqueMedia?: Maybe<Media>;
  findUniquePartner?: Maybe<Partner>;
  findUniqueProduct?: Maybe<Product>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
};


export type QueryAggregateCaseArgs = {
  cursor?: Maybe<CaseWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<CaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CaseWhereInput>;
};


export type QueryAggregateCatalogArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<CatalogOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<CategoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryAggregateExhibitorArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ExhibitorOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type QueryAggregateFeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<FeedbackOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type QueryAggregateLocationArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<LocationOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};


export type QueryAggregateMediaArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<MediaOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};


export type QueryAggregatePartnerArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<PartnerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type QueryAggregateProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstCaseArgs = {
  cursor?: Maybe<CaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CaseWhereInput>;
};


export type QueryFindFirstCatalogArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CatalogScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CatalogOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CategoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CategoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindFirstExhibitorArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ExhibitorScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ExhibitorOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type QueryFindFirstFeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeedbackScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeedbackOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type QueryFindFirstLocationArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<LocationScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<LocationOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};


export type QueryFindFirstMediaArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<MediaScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<MediaOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};


export type QueryFindFirstPartnerArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PartnerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PartnerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyCaseArgs = {
  cursor?: Maybe<CaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CaseWhereInput>;
};


export type QueryFindManyCaseCountArgs = {
  cursor?: Maybe<CaseWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CaseScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CaseOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CaseWhereInput>;
};


export type QueryFindManyCatalogArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CatalogScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CatalogOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type QueryFindManyCatalogCountArgs = {
  cursor?: Maybe<CatalogWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CatalogScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CatalogOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CatalogWhereInput>;
};


export type QueryFindManyCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CategoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CategoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindManyCategoryCountArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<CategoryScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<CategoryOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindManyExhibitorArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ExhibitorScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ExhibitorOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type QueryFindManyExhibitorCountArgs = {
  cursor?: Maybe<ExhibitorWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ExhibitorScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ExhibitorOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ExhibitorWhereInput>;
};


export type QueryFindManyFeedbackArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeedbackScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeedbackOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type QueryFindManyFeedbackCountArgs = {
  cursor?: Maybe<FeedbackWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<FeedbackScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<FeedbackOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedbackWhereInput>;
};


export type QueryFindManyLocationArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<LocationScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<LocationOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};


export type QueryFindManyLocationCountArgs = {
  cursor?: Maybe<LocationWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<LocationScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<LocationOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LocationWhereInput>;
};


export type QueryFindManyMediaArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<MediaScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<MediaOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};


export type QueryFindManyMediaCountArgs = {
  cursor?: Maybe<MediaWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<MediaScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<MediaOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MediaWhereInput>;
};


export type QueryFindManyPartnerArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PartnerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PartnerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type QueryFindManyPartnerCountArgs = {
  cursor?: Maybe<PartnerWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<PartnerScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<PartnerOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PartnerWhereInput>;
};


export type QueryFindManyProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyProductCountArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<ProductScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<ProductOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<Maybe<UserScalarFieldEnum>>>;
  orderBy?: Maybe<Array<Maybe<UserOrderByWithRelationInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueCaseArgs = {
  where: CaseWhereUniqueInput;
};


export type QueryFindUniqueCatalogArgs = {
  where: CatalogWhereUniqueInput;
};


export type QueryFindUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindUniqueExhibitorArgs = {
  where: ExhibitorWhereUniqueInput;
};


export type QueryFindUniqueFeedbackArgs = {
  where: FeedbackWhereUniqueInput;
};


export type QueryFindUniqueLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryFindUniqueMediaArgs = {
  where: MediaWhereUniqueInput;
};


export type QueryFindUniquePartnerArgs = {
  where: PartnerWhereUniqueInput;
};


export type QueryFindUniqueProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum StandardEnum {
  Gost = 'gost',
  Iso = 'iso'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['String']>>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasSome?: Maybe<Array<Maybe<Scalars['String']>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  exhibitor?: Maybe<Exhibitor>;
  id: Scalars['Int'];
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
  tokenVersion?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  login: Scalars['Int'];
  password: Scalars['Int'];
  tokenVersion: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  exhibitor?: Maybe<ExhibitorCreateNestedOneWithoutOwnerInput>;
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserCreateNestedOneWithoutExhibitorInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutExhibitorInput>;
  create?: Maybe<UserUncheckedCreateWithoutExhibitorInput>;
};

export type UserCreateOrConnectWithoutExhibitorInput = {
  create: UserUncheckedCreateWithoutExhibitorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutExhibitorInput = {
  email: Scalars['String'];
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserMinOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: Maybe<SortOrder>;
  exhibitor?: Maybe<ExhibitorOrderByWithRelationInput>;
  id?: Maybe<SortOrder>;
  login?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Login = 'login',
  Password = 'password',
  TokenVersion = 'tokenVersion'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereWithAggregatesInput>>>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  login?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  tokenVersion?: Maybe<IntNullableWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  tokenVersion?: Maybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  email: Scalars['String'];
  exhibitor?: Maybe<ExhibitorUncheckedCreateNestedOneWithoutOwnerInput>;
  id?: Maybe<Scalars['Int']>;
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserUncheckedCreateWithoutExhibitorInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  login: Scalars['String'];
  password: Scalars['String'];
  tokenVersion?: Maybe<Scalars['Int']>;
};

export type UserUncheckedUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUncheckedUpdateOneWithoutOwnerInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutExhibitorInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<IntFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  exhibitor?: Maybe<ExhibitorUpdateOneWithoutOwnerInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutExhibitorInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutExhibitorInput>;
  create?: Maybe<UserUncheckedCreateWithoutExhibitorInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutExhibitorInput>;
  upsert?: Maybe<UserUpsertWithoutExhibitorInput>;
};

export type UserUpdateWithoutExhibitorInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  login?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  tokenVersion?: Maybe<NullableIntFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutExhibitorInput = {
  create: UserUncheckedCreateWithoutExhibitorInput;
  update: UserUncheckedUpdateWithoutExhibitorInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  email?: Maybe<StringFilter>;
  exhibitor?: Maybe<ExhibitorWhereInput>;
  id?: Maybe<IntFilter>;
  login?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  tokenVersion?: Maybe<IntNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  login?: Maybe<Scalars['String']>;
};

export enum VisibleCostEnum {
  No = 'no',
  TextOnly = 'text_only',
  Yes = 'yes'
}
