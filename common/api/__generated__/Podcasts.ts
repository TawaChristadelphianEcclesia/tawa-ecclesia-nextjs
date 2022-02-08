/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Podcasts
// ====================================================

export interface Podcasts_podcasts_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface Podcasts_podcasts_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: Podcasts_podcasts_data_attributes_categories_data_attributes | null;
}

export interface Podcasts_podcasts_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: Podcasts_podcasts_data_attributes_categories_data[];
}

export interface Podcasts_podcasts_data_attributes_thumbnail_data_attributes {
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

export interface Podcasts_podcasts_data_attributes_thumbnail_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: Podcasts_podcasts_data_attributes_thumbnail_data_attributes | null;
}

export interface Podcasts_podcasts_data_attributes_thumbnail {
  __typename: "UploadFileEntityResponse";
  data: Podcasts_podcasts_data_attributes_thumbnail_data | null;
}

export interface Podcasts_podcasts_data_attributes_audio_data_attributes {
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

export interface Podcasts_podcasts_data_attributes_audio_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: Podcasts_podcasts_data_attributes_audio_data_attributes | null;
}

export interface Podcasts_podcasts_data_attributes_audio {
  __typename: "UploadFileEntityResponse";
  data: Podcasts_podcasts_data_attributes_audio_data | null;
}

export interface Podcasts_podcasts_data_attributes {
  __typename: "Podcast";
  title: string;
  description: string | null;
  categories: Podcasts_podcasts_data_attributes_categories | null;
  thumbnail: Podcasts_podcasts_data_attributes_thumbnail;
  audio: Podcasts_podcasts_data_attributes_audio;
  publishedAt: any | null;
}

export interface Podcasts_podcasts_data {
  __typename: "PodcastEntity";
  attributes: Podcasts_podcasts_data_attributes | null;
}

export interface Podcasts_podcasts {
  __typename: "PodcastEntityResponseCollection";
  data: Podcasts_podcasts_data[];
}

export interface Podcasts {
  podcasts: Podcasts_podcasts | null;
}
