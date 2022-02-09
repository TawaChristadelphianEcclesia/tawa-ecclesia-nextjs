/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Videos
// ====================================================

export interface Videos_videos_data_attributes_image_data_attributes {
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

export interface Videos_videos_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: Videos_videos_data_attributes_image_data_attributes | null;
}

export interface Videos_videos_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: Videos_videos_data_attributes_image_data | null;
}

export interface Videos_videos_data_attributes {
  __typename: "Video";
  url: string | null;
  image: Videos_videos_data_attributes_image;
  title: string;
  subtitle: string | null;
  description: string | null;
  publishedAt: any | null;
}

export interface Videos_videos_data {
  __typename: "VideoEntity";
  attributes: Videos_videos_data_attributes | null;
}

export interface Videos_videos {
  __typename: "VideoEntityResponseCollection";
  data: Videos_videos_data[];
}

export interface Videos {
  videos: Videos_videos | null;
}
