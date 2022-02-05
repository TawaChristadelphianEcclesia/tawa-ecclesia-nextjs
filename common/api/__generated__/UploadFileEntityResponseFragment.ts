/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UploadFileEntityResponseFragment
// ====================================================

export interface UploadFileEntityResponseFragment_data_attributes {
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

export interface UploadFileEntityResponseFragment_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: UploadFileEntityResponseFragment_data_attributes | null;
}

export interface UploadFileEntityResponseFragment {
  __typename: "UploadFileEntityResponse";
  data: UploadFileEntityResponseFragment_data | null;
}
