/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTBLOCKSEVENTLIST_FILTER } from "./../../../__generated__/globalTypes";

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
  image: HomePageData_home_data_attributes_Blocks_ComponentBlocksHero_image | null;
  text: string | null;
  title: string | null;
  id: string;
  color: string | null;
}

export interface HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList {
  __typename: "ComponentBlocksEventList";
  maxShown: number | null;
  title: string | null;
  filter: ENUM_COMPONENTBLOCKSEVENTLIST_FILTER | null;
  noEventsPlaceholder: string | null;
  id: string;
}

export type HomePageData_home_data_attributes_Blocks = HomePageData_home_data_attributes_Blocks_Error | HomePageData_home_data_attributes_Blocks_ComponentBlocksHero | HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList;

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
