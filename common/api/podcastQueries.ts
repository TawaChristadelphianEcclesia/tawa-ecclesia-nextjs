import { gql } from "@apollo/client";
import client from "./apolloClient";
import { SEO_FIELDS } from "./fragments";
import { PodcastHomePage } from "./__generated__/PodcastHomePage";

export const getPodcastHomePageData = async () => {
    const { data } = await client.query<PodcastHomePage>({
        query: gql`
            ${SEO_FIELDS}
            query PodcastHomePage {
                podcastPage {
                    data {
                        attributes {
                            seo {
                                ...SeoFieldsFragment
                            }
                            title
                            subtitle
                        }
                    }
                }
            }
        `,
    });
    return data;
};
