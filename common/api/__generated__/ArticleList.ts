/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleList
// ====================================================

export interface ArticleList_articles_data_attributes_image_data_attributes {
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

export interface ArticleList_articles_data_attributes_image_data {
  __typename: "UploadFileEntity";
  id: string | null;
  attributes: ArticleList_articles_data_attributes_image_data_attributes | null;
}

export interface ArticleList_articles_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: ArticleList_articles_data_attributes_image_data | null;
}

export interface ArticleList_articles_data_attributes_categories_data_attributes {
  __typename: "Category";
  name: string;
}

export interface ArticleList_articles_data_attributes_categories_data {
  __typename: "CategoryEntity";
  attributes: ArticleList_articles_data_attributes_categories_data_attributes | null;
}

export interface ArticleList_articles_data_attributes_categories {
  __typename: "CategoryRelationResponseCollection";
  data: ArticleList_articles_data_attributes_categories_data[];
}

export interface ArticleList_articles_data_attributes {
  __typename: "Article";
  slug: string;
  title: string;
  summary: string | null;
  publishedAt: any | null;
  image: ArticleList_articles_data_attributes_image;
  categories: ArticleList_articles_data_attributes_categories | null;
  content: string | null;
}

export interface ArticleList_articles_data {
  __typename: "ArticleEntity";
  attributes: ArticleList_articles_data_attributes | null;
}

export interface ArticleList_articles {
  __typename: "ArticleEntityResponseCollection";
  data: ArticleList_articles_data[];
}

export interface ArticleList {
  articles: ArticleList_articles | null;
}
