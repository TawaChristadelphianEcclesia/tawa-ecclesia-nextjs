/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SeoFragment
// ====================================================

export interface SeoFragment_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface SeoFragment_metaImage_data_attributes {
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

export interface SeoFragment_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: SeoFragment_metaImage_data_attributes | null;
}

export interface SeoFragment_metaImage {
  __typename: "UploadFileEntityResponse";
  data: SeoFragment_metaImage_data | null;
}

export interface SeoFragment {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (SeoFragment_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: SeoFragment_metaImage | null;
}
