/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleSlugs
// ====================================================

export interface ArticleSlugs_articles_data_attributes {
  __typename: "Article";
  slug: string;
}

export interface ArticleSlugs_articles_data {
  __typename: "ArticleEntity";
  attributes: ArticleSlugs_articles_data_attributes | null;
}

export interface ArticleSlugs_articles {
  __typename: "ArticleEntityResponseCollection";
  data: ArticleSlugs_articles_data[];
}

export interface ArticleSlugs {
  articles: ArticleSlugs_articles | null;
}
