import { gql } from "@apollo/client";
import client from "../api/apolloClient";
import { Events } from "./__generated__/Events";

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
