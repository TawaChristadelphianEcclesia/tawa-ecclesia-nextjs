/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTBLOCKSEVENTLIST_FILTER, ENUM_COMPONENTSHAREDLINK_TARGET } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HomePageData
// ====================================================

export interface HomePageData_home_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface HomePageData_home_data_attributes_seo_metaImage_data_attributes {
  __typename: "UploadFile";
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string | null;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface HomePageData_home_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: HomePageData_home_data_attributes_seo_metaImage_data_attributes | null;
}

export interface HomePageData_home_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: HomePageData_home_data_attributes_seo_metaImage_data | null;
}

export interface HomePageData_home_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (HomePageData_home_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: HomePageData_home_data_attributes_seo_metaImage | null;
}

export interface HomePageData_home_data_attributes_Blocks_Error {
  __typename: "Error";
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image_data_attributes {
  __typename: "UploadFile";
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  ext: string | null;
  hash: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image_data_attributes | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image {
  __typename: "UploadFileEntityResponse";
  data: HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image_data | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksHero {
  __typename: "ComponentBlocksHero";
  image: HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image;
  text: string | null;
  title: string;
  id: string;
  color: string | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList {
  __typename: "ComponentBlocksEventList";
  maxShown: number | null;
  noEventsPlaceholder: string | null;
  title: string;
  filter: ENUM_COMPONENTBLOCKSEVENTLIST_FILTER | null;
  id: string;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm {
  __typename: "ComponentBlocksContactForm";
  title: string;
  endpoint: string;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image_data_attributes {
  __typename: "UploadFile";
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  ext: string | null;
  hash: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image_data_attributes | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image {
  __typename: "UploadFileEntityResponse";
  data: HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image_data | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_leftLink {
  __typename: "ComponentSharedLink";
  href: string;
  label: string;
  target: ENUM_COMPONENTSHAREDLINK_TARGET | null;
  isExternal: boolean;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_rightLink {
  __typename: "ComponentSharedLink";
  href: string;
  label: string;
  target: ENUM_COMPONENTSHAREDLINK_TARGET | null;
  isExternal: boolean;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard {
  __typename: "ComponentBlocksImageCard";
  title: string;
  body: string;
  image: HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_image;
  leftLink: HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_leftLink | null;
  rightLink: HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard_rightLink | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage_data_attributes {
  __typename: "UploadFile";
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string | null;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage_data_attributes | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage {
  __typename: "UploadFileEntityResponse";
  data: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage_data | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string | null;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image_data_attributes | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image_data | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes {
  __typename: "Article";
  slug: string;
  image: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes_image;
  title: string;
  summary: string | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data {
  __typename: "ArticleEntity";
  attributes: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data_attributes | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article {
  __typename: "ArticleEntityResponse";
  data: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article_data | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight {
  __typename: "ComponentBlocksArticleHighlight";
  title: string;
  replaceimage: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_replaceimage | null;
  article: HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight_article | null;
}

export type HomePageData_home_data_attributes_Blocks = HomePageData_home_data_attributes_Blocks_Error | HomePageData_home_data_attributes_Blocks_ComponentBlocksHero | HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList | HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm | HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard | HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight;

export interface HomePageData_home_data_attributes {
  __typename: "Home";
  seo: HomePageData_home_data_attributes_seo | null;
  Title: string;
  Blocks: (HomePageData_home_data_attributes_Blocks | null)[] | null;
}

export interface HomePageData_home_data {
  __typename: "HomeEntity";
  attributes: HomePageData_home_data_attributes | null;
}

export interface HomePageData_home {
  __typename: "HomeEntityResponse";
  data: HomePageData_home_data | null;
}

export interface HomePageData {
  home: HomePageData_home | null;
}
