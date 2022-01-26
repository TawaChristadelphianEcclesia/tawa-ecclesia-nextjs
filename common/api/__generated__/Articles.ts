/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Articles
// ====================================================

export interface Articles_articles_data_attributes {
  __typename: "Article";
  slug: string;
}

export interface Articles_articles_data {
  __typename: "ArticleEntity";
  attributes: Articles_articles_data_attributes | null;
}

export interface Articles_articles {
  __typename: "ArticleEntityResponseCollection";
  data: Articles_articles_data[];
}

export interface Articles {
  articles: Articles_articles | null;
}
