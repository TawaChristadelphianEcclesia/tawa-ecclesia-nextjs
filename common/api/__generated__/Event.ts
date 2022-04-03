/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Event
// ====================================================

export interface Event_events_data_attributes {
  __typename: "Event";
  title: string;
  description: string | null;
  presenter: string | null;
  location: string | null;
  time: any;
}

export interface Event_events_data {
  __typename: "EventEntity";
  attributes: Event_events_data_attributes | null;
}

export interface Event_events {
  __typename: "EventEntityResponseCollection";
  data: Event_events_data[];
}

export interface Event {
  events: Event_events | null;
}

export interface EventVariables {
  slug?: string | null;
}
