/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleHomePage
// ====================================================

export interface ArticleHomePage_blogPage_data_attributes_seo_meta {
  __typename: "ComponentSharedMetas";
  name: string | null;
  content: string | null;
}

export interface ArticleHomePage_blogPage_data_attributes_seo_metaImage_data_attributes {
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

export interface ArticleHomePage_blogPage_data_attributes_seo_metaImage_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: ArticleHomePage_blogPage_data_attributes_seo_metaImage_data_attributes | null;
}

export interface ArticleHomePage_blogPage_data_attributes_seo_metaImage {
  __typename: "UploadFileEntityResponse";
  data: ArticleHomePage_blogPage_data_attributes_seo_metaImage_data | null;
}

export interface ArticleHomePage_blogPage_data_attributes_seo {
  __typename: "ComponentSharedSeo";
  metaTitle: string | null;
  metaDescription: string | null;
  meta: (ArticleHomePage_blogPage_data_attributes_seo_meta | null)[] | null;
  preventIndexing: boolean | null;
  structuredData: any | null;
  metaImage: ArticleHomePage_blogPage_data_attributes_seo_metaImage | null;
}

export interface ArticleHomePage_blogPage_data_attributes {
  __typename: "BlogPage";
  seo: ArticleHomePage_blogPage_data_attributes_seo | null;
  articlesPerPage: number;
  title: string;
  subtitle: string | null;
}

export interface ArticleHomePage_blogPage_data {
  __typename: "BlogPageEntity";
  attributes: ArticleHomePage_blogPage_data_attributes | null;
}

export interface ArticleHomePage_blogPage {
  __typename: "BlogPageEntityResponse";
  data: ArticleHomePage_blogPage_data | null;
}

export interface ArticleHomePage {
  blogPage: ArticleHomePage_blogPage | null;
}
