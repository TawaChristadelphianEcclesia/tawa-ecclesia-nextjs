/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: EventSlugs
// ====================================================

export interface EventSlugs_events_data_attributes {
  __typename: "Event";
  slug: string;
}

export interface EventSlugs_events_data {
  __typename: "EventEntity";
  attributes: EventSlugs_events_data_attributes | null;
}

export interface EventSlugs_events {
  __typename: "EventEntityResponseCollection";
  data: EventSlugs_events_data[];
}

export interface EventSlugs {
  events: EventSlugs_events | null;
}
