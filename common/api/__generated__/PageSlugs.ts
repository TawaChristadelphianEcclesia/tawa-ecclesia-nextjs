/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PageSlugs
// ====================================================

export interface PageSlugs_pages_data_attributes {
  __typename: "Page";
  slug: string;
}

export interface PageSlugs_pages_data {
  __typename: "PageEntity";
  attributes: PageSlugs_pages_data_attributes | null;
}

export interface PageSlugs_pages {
  __typename: "PageEntityResponseCollection";
  data: PageSlugs_pages_data[];
}

export interface PageSlugs {
  pages: PageSlugs_pages | null;
}
