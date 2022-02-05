/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SeoFieldsFragment
// ====================================================

export interface SeoFieldsFragment_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface SeoFieldsFragment_metaImage_data_attributes {
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

export interface SeoFieldsFragment_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: SeoFieldsFragment_metaImage_data_attributes | null;
}

export interface SeoFieldsFragment_metaImage {
  __typename: "UploadFileEntityResponse";
  data: SeoFieldsFragment_metaImage_data | null;
}

export interface SeoFieldsFragment {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (SeoFieldsFragment_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: SeoFieldsFragment_metaImage | null;
}
