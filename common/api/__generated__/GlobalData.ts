/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTSHAREDLINK_TARGET } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GlobalData
// ====================================================

export interface GlobalData_global_data_attributes_footer_footerColumns_links {
  __typename: "ComponentSharedLink";
  id: string;
  href: string;
  label: string;
  target: ENUM_COMPONENTSHAREDLINK_TARGET | null;
  isExternal: boolean;
}

export interface GlobalData_global_data_attributes_footer_footerColumns {
  __typename: "ComponentSharedFooterColumns";
  title: string | null;
  links: (GlobalData_global_data_attributes_footer_footerColumns_links | null)[] | null;
}

export interface GlobalData_global_data_attributes_footer_footerImage_data_attributes {
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
}

export interface GlobalData_global_data_attributes_footer_footerImage_data {
  __typename: "UploadFileEntity";
  attributes: GlobalData_global_data_attributes_footer_footerImage_data_attributes | null;
}

export interface GlobalData_global_data_attributes_footer_footerImage {
  __typename: "UploadFileEntityResponse";
  data: GlobalData_global_data_attributes_footer_footerImage_data | null;
}

export interface GlobalData_global_data_attributes_footer {
  __typename: "ComponentGlobalFooter";
  footerColumns: (GlobalData_global_data_attributes_footer_footerColumns | null)[] | null;
  footerImage: GlobalData_global_data_attributes_footer_footerImage | null;
  footerText: string | null;
}

export interface GlobalData_global_data_attributes_navigation_logo_data_attributes {
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
}

export interface GlobalData_global_data_attributes_navigation_logo_data {
  __typename: "UploadFileEntity";
  attributes: GlobalData_global_data_attributes_navigation_logo_data_attributes | null;
}

export interface GlobalData_global_data_attributes_navigation_logo {
  __typename: "UploadFileEntityResponse";
  data: GlobalData_global_data_attributes_navigation_logo_data | null;
}

export interface GlobalData_global_data_attributes_navigation_leftButton_link {
  __typename: "ComponentSharedLink";
  href: string;
  label: string;
  target: ENUM_COMPONENTSHAREDLINK_TARGET | null;
  isExternal: boolean;
}

export interface GlobalData_global_data_attributes_navigation_leftButton {
  __typename: "ComponentSharedButton";
  link: GlobalData_global_data_attributes_navigation_leftButton_link | null;
}

export interface GlobalData_global_data_attributes_navigation_links {
  __typename: "ComponentSharedLink";
  href: string;
  label: string;
  target: ENUM_COMPONENTSHAREDLINK_TARGET | null;
  isExternal: boolean;
}

export interface GlobalData_global_data_attributes_navigation {
  __typename: "ComponentGlobalNavigation";
  logo: GlobalData_global_data_attributes_navigation_logo | null;
  leftButton: GlobalData_global_data_attributes_navigation_leftButton | null;
  links: (GlobalData_global_data_attributes_navigation_links | null)[] | null;
}

export interface GlobalData_global_data_attributes {
  __typename: "Global";
  SiteTitle: string | null;
  SiteTagline: string | null;
  footer: GlobalData_global_data_attributes_footer | null;
  navigation: GlobalData_global_data_attributes_navigation | null;
}

export interface GlobalData_global_data {
  __typename: "GlobalEntity";
  attributes: GlobalData_global_data_attributes | null;
}

export interface GlobalData_global {
  __typename: "GlobalEntityResponse";
  data: GlobalData_global_data | null;
}

export interface GlobalData {
  global: GlobalData_global | null;
}
