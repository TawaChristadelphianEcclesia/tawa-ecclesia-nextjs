import { gql } from "@apollo/client";
import client from "./apolloClient";
import { SEO_FIELDS, UPLOAD_FILE_FRAGMENT } from "./fragments";
import { GeneralPage } from "./__generated__/GeneralPage";
import { HomePageData } from "./__generated__/HomePageData";
import { PageSlugs } from "./__generated__/PageSlugs";

export const getPageSlugs = async () => {
    const { data } = await client.query<PageSlugs>({
        query: gql`
            query PageSlugs {
                pages {
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

export const getHomePageData = async () => {
    const { data } = await client.query<HomePageData>({
        query: gql`
            ${UPLOAD_FILE_FRAGMENT}
            ${SEO_FIELDS}
            query HomePageData {
                home {
                    data {
                        attributes {
                            seo {
                                ...SeoFieldsFragment
                            }
                            Title
                            Blocks {
                                ... on ComponentBlocksHero {
                                    __typename
                                    image {
                                        ...UploadFileEntityResponseFragment
                                    }
                                    text
                                    title
                                    id
                                    color
                                }
                                ... on ComponentBlocksEventList {
                                    __typename
                                    maxShown
                                    noEventsPlaceholder
                                    title
                                    filter
                                    id
                                }
                                ... on ComponentBlocksContactForm {
                                    __typename
                                    title
                                    endpoint
                                }
                                ... on ComponentBlocksImageCard {
                                    __typename
                                    title
                                    body
                                    image {
                                        ...UploadFileEntityResponseFragment
                                    }
                                    leftLink {
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                    rightLink {
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                }
                                ... on ComponentBlocksArticleHighlight {
                                    __typename
                                    title
                                    replaceimage {
                                        ...UploadFileEntityResponseFragment
                                    }
                                    article {
                                        data {
                                            attributes {
                                                slug
                                                image {
                                                    ...UploadFileEntityResponseFragment
                                                }
                                                title
                                                summary
                                            }
                                        }
                                    }
                                }
                                ... on ComponentBlocksVideoHighlight {
                                    __typename
                                    title
                                    video {
                                        data {
                                            attributes {
                                                title
                                                subtitle
                                                description
                                                url
                                                image {
                                                    ...UploadFileEntityResponseFragment
                                                }
                                            }
                                        }
                                    }
                                    replaceImage {
                                        ...UploadFileEntityResponseFragment
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
    });
    return data;
};

export const getGeneralPageData = async (slug: string) => {
    const { data } = await client.query<GeneralPage>({
        query: gql`
            ${UPLOAD_FILE_FRAGMENT}
            ${SEO_FIELDS}
            query GeneralPage($slug: String) {
                pages(filters: { slug: { eq: $slug } }) {
                    data {
                        attributes {
                            title
                            slug
                            seo {
                                ...SeoFieldsFragment
                            }
                            blocks {
                                ... on ComponentBlocksTextContent {
                                    __typename
                                    content
                                }
                                ... on ComponentBlocksHero {
                                    __typename
                                    color
                                    text
                                    title
                                    image {
                                        ...UploadFileEntityResponseFragment
                                    }
                                }
                                ... on ComponentBlocksStandardHeader {
                                    __typename
                                    title
                                    summary
                                    headerImage {
                                        ...UploadFileEntityResponseFragment
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: { slug },
    });
    return data.pages?.data ? data.pages?.data[0] : undefined;
};
