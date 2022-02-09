/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideoHomePage
// ====================================================

export interface VideoHomePage_videoPage_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface VideoHomePage_videoPage_data_attributes_seo_metaImage_data_attributes {
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

export interface VideoHomePage_videoPage_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: VideoHomePage_videoPage_data_attributes_seo_metaImage_data_attributes | null;
}

export interface VideoHomePage_videoPage_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: VideoHomePage_videoPage_data_attributes_seo_metaImage_data | null;
}

export interface VideoHomePage_videoPage_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (VideoHomePage_videoPage_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: VideoHomePage_videoPage_data_attributes_seo_metaImage | null;
}

export interface VideoHomePage_videoPage_data_attributes {
  __typename: "VideoPage";
  seo: VideoHomePage_videoPage_data_attributes_seo;
  title: string;
  subtitle: string | null;
}

export interface VideoHomePage_videoPage_data {
  __typename: "VideoPageEntity";
  id: string | null;
  attributes: VideoHomePage_videoPage_data_attributes | null;
}

export interface VideoHomePage_videoPage {
  __typename: "VideoPageEntityResponse";
  data: VideoHomePage_videoPage_data | null;
}

export interface VideoHomePage {
  videoPage: VideoHomePage_videoPage | null;
}
