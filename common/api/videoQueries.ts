import { gql } from "@apollo/client";
import client from "./apolloClient";
import { SEO_FIELDS, UPLOAD_FILE_FRAGMENT } from "./fragments";
import { VideoHomePage } from "./__generated__/VideoHomePage";
import { VideoList } from "./__generated__/VideoList";

export const getVideoHomePageData = async () => {
    const { data } = await client.query<VideoHomePage>({
        query: gql`
            ${SEO_FIELDS}
            query VideoHomePage {
                videoPage {
                    data {
                        id
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

export const getVideoListData = async () => {
    const { data, error } = await client.query<VideoList>({
        query: gql`
            ${UPLOAD_FILE_FRAGMENT}
            query VideoList {
                videos {
                    data {
                        attributes {
                            url
                            image {
                                ...UploadFileEntityResponseFragment
                            }
                            title
                            subtitle
                            description
                            categories {
                                data {
                                    attributes {
                                        name
                                        slug
                                    }
                                }
                            }
                            publishedAt
                        }
                    }
                }
            }
        `,
    });
    if (error) {
        console.log(error);
    }
    return data;
};
