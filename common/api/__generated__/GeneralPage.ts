/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GeneralPage
// ====================================================

export interface GeneralPage_pages_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface GeneralPage_pages_data_attributes_seo_metaImage_data_attributes {
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

export interface GeneralPage_pages_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GeneralPage_pages_data_attributes_seo_metaImage_data_attributes | null;
}

export interface GeneralPage_pages_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: GeneralPage_pages_data_attributes_seo_metaImage_data | null;
}

export interface GeneralPage_pages_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (GeneralPage_pages_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: GeneralPage_pages_data_attributes_seo_metaImage | null;
}

export interface GeneralPage_pages_data_attributes_blocks_Error {
  __typename: "Error";
}

export interface GeneralPage_pages_data_attributes_blocks_ComponentBlocksTextContent {
  __typename: "ComponentBlocksTextContent";
  content: string | null;
}

export interface GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image_data_attributes {
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

export interface GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image_data_attributes | null;
}

export interface GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image {
  __typename: "UploadFileEntityResponse";
  data: GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image_data | null;
}

export interface GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero {
  __typename: "ComponentBlocksHero";
  color: string | null;
  text: string | null;
  title: string;
  image: GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero_image;
}

export type GeneralPage_pages_data_attributes_blocks = GeneralPage_pages_data_attributes_blocks_Error | GeneralPage_pages_data_attributes_blocks_ComponentBlocksTextContent | GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero;

export interface GeneralPage_pages_data_attributes {
  __typename: "Page";
  title: string | null;
  slug: string;
  seo: GeneralPage_pages_data_attributes_seo | null;
  blocks: (GeneralPage_pages_data_attributes_blocks | null)[] | null;
}

export interface GeneralPage_pages_data {
  __typename: "PageEntity";
  attributes: GeneralPage_pages_data_attributes | null;
}

export interface GeneralPage_pages {
  __typename: "PageEntityResponseCollection";
  data: GeneralPage_pages_data[];
}

export interface GeneralPage {
  pages: GeneralPage_pages | null;
}

export interface GeneralPageVariables {
  slug?: string | null;
}
