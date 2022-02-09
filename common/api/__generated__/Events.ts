/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Events
// ====================================================

export interface Events_events_data_attributes {
  __typename: "Event";
  title: string;
  description: string | null;
  presenter: string | null;
  location: string | null;
  time: any;
}

export interface Events_events_data {
  __typename: "EventEntity";
  attributes: Events_events_data_attributes | null;
}

export interface Events_events {
  __typename: "EventEntityResponseCollection";
  data: Events_events_data[];
}

export interface Events {
  events: Events_events | null;
}
