import { gql } from "@apollo/client";
import client from "../api/apolloClient";
import { Event } from "./__generated__/Event";
import { Events } from "./__generated__/Events";
import { EventSlugs } from "./__generated__/EventSlugs";

export const getEventsData = async () => {
    const { data } = await client.query<Events>({
        query: gql`
            query Events {
                events {
                    data {
                        attributes {
                            title
                            description
                            presenter
                            location
                            time
                        }
                    }
                }
            }
        `,
    });
    return data;
};

export const getEventSlugs = async () => {
    const { data } = await client.query<EventSlugs>({
        query: gql`
            query EventSlugs {
                events {
                    data {
                        attributes {
                            slug
                        }
                    }
                }
            }
        `,
    });
    return data;
};

export const getEventData = async (slug: string) => {
    const { data } = await client.query<Event>({
        query: gql`
            query Event($slug: String) {
                events(filters: { slug: { eq: $slug } }) {
                    data {
                        attributes {
                            title
                            description
                            presenter
                            location
                            time
                        }
                    }
                }
            }
        `,
        variables: { slug },
    });
    return data.events?.data ? data.events?.data[0] : undefined;
};
