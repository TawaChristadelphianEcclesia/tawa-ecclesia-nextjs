/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VideoList
// ====================================================

export interface VideoList_videos_data_attributes_image_data_attributes {
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

export interface VideoList_videos_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: VideoList_videos_data_attributes_image_data_attributes | null;
}

export interface VideoList_videos_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: VideoList_videos_data_attributes_image_data | null;
}

export interface VideoList_videos_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface VideoList_videos_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: VideoList_videos_data_attributes_categories_data_attributes | null;
}

export interface VideoList_videos_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: VideoList_videos_data_attributes_categories_data[];
}

export interface VideoList_videos_data_attributes {
  __typename: "Video";
  url: string | null;
  image: VideoList_videos_data_attributes_image;
  title: string;
  subtitle: string | null;
  description: string | null;
  categories: VideoList_videos_data_attributes_categories | null;
  publishedAt: any | null;
}

export interface VideoList_videos_data {
  __typename: "VideoEntity";
  attributes: VideoList_videos_data_attributes | null;
}

export interface VideoList_videos {
  __typename: "VideoEntityResponseCollection";
  data: VideoList_videos_data[];
}

export interface VideoList {
  videos: VideoList_videos | null;
}
