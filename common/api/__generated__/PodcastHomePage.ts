/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PodcastHomePage
// ====================================================

export interface PodcastHomePage_podcastPage_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface PodcastHomePage_podcastPage_data_attributes_seo_metaImage_data_attributes {
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

export interface PodcastHomePage_podcastPage_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: PodcastHomePage_podcastPage_data_attributes_seo_metaImage_data_attributes | null;
}

export interface PodcastHomePage_podcastPage_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: PodcastHomePage_podcastPage_data_attributes_seo_metaImage_data | null;
}

export interface PodcastHomePage_podcastPage_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (PodcastHomePage_podcastPage_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: PodcastHomePage_podcastPage_data_attributes_seo_metaImage | null;
}

export interface PodcastHomePage_podcastPage_data_attributes {
  __typename: "PodcastPage";
  seo: PodcastHomePage_podcastPage_data_attributes_seo;
  title: string | null;
  subtitle: string | null;
}

export interface PodcastHomePage_podcastPage_data {
  __typename: "PodcastPageEntity";
  attributes: PodcastHomePage_podcastPage_data_attributes | null;
}

export interface PodcastHomePage_podcastPage {
  __typename: "PodcastPageEntityResponse";
  data: PodcastHomePage_podcastPage_data | null;
}

export interface PodcastHomePage {
  podcastPage: PodcastHomePage_podcastPage | null;
}
