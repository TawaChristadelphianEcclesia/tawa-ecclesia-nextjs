/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Article
// ====================================================

export interface Article_articles_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface Article_articles_data_attributes_seo_metaImage_data_attributes {
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

export interface Article_articles_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: Article_articles_data_attributes_seo_metaImage_data_attributes | null;
}

export interface Article_articles_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: Article_articles_data_attributes_seo_metaImage_data | null;
}

export interface Article_articles_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (Article_articles_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: Article_articles_data_attributes_seo_metaImage | null;
}

export interface Article_articles_data_attributes_image_data_attributes {
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

export interface Article_articles_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: Article_articles_data_attributes_image_data_attributes | null;
}

export interface Article_articles_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: Article_articles_data_attributes_image_data | null;
}

export interface Article_articles_data_attributes {
  __typename: "Article";
  seo: Article_articles_data_attributes_seo | null;
  slug: string;
  title: string;
  summary: string | null;
  image: Article_articles_data_attributes_image;
  content: string | null;
}

export interface Article_articles_data {
  __typename: "ArticleEntity";
  attributes: Article_articles_data_attributes | null;
}

export interface Article_articles {
  __typename: "ArticleEntityResponseCollection";
  data: Article_articles_data[];
}

export interface Article {
  articles: Article_articles | null;
}

export interface ArticleVariables {
  slug?: string | null;
}
