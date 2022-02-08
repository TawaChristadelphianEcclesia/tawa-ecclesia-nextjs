import { gql } from "@apollo/client";
import client from "./apolloClient";
import { SEO_FIELDS, UPLOAD_FILE_FRAGMENT } from "./fragments";
import { PodcastHomePage } from "./__generated__/PodcastHomePage";
import { Podcasts } from "./__generated__/Podcasts";

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

export const getPodcasts = async () => {
    const { data } = await client.query<Podcasts>({
        query: gql`
            ${UPLOAD_FILE_FRAGMENT}
            query Podcasts {
                podcasts {
                    data {
                        attributes {
                            title
                            description
                            categories {
                                data {
                                    attributes {
                                        name
                                        slug
                                    }
                                }
                            }
                            thumbnail {
                                ...UploadFileEntityResponseFragment
                            }
                            audio {
                                ...UploadFileEntityResponseFragment
                            }
                            publishedAt
                        }
                    }
                }
            }
        `,
    });
    return data;
};
