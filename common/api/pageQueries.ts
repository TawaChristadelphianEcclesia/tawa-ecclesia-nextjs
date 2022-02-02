import { gql } from "@apollo/client";
import client from "./apolloClient";
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
            query HomePageData {
                home {
                    data {
                        attributes {
                            seo {
                                metaTitle
                                metaDescription
                                meta {
                                    name
                                    content
                                }
                                preventIndexing
                                structuredData
                                metaImage {
                                    data {
                                        id
                                        attributes {
                                            name
                                            alternativeText
                                            caption
                                            width
                                            height
                                            formats
                                            hash
                                            ext
                                            mime
                                            size
                                            url
                                            previewUrl
                                            provider
                                            provider_metadata
                                            createdAt
                                            updatedAt
                                        }
                                    }
                                }
                            }
                            Title
                            Blocks {
                                ... on ComponentBlocksHero {
                                    __typename
                                    image {
                                        data {
                                            id
                                            attributes {
                                                name
                                                alternativeText
                                                caption
                                                width
                                                height
                                                formats
                                                ext
                                                hash
                                                mime
                                                size
                                                url
                                                previewUrl
                                                provider
                                                provider_metadata
                                                createdAt
                                                updatedAt
                                            }
                                        }
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
                                        data {
                                            id
                                            attributes {
                                                name
                                                alternativeText
                                                caption
                                                width
                                                height
                                                formats
                                                ext
                                                hash
                                                mime
                                                size
                                                url
                                                previewUrl
                                                provider
                                                provider_metadata
                                                createdAt
                                                updatedAt
                                            }
                                        }
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
                                        data {
                                            id
                                            attributes {
                                                name
                                                alternativeText
                                                caption
                                                width
                                                height
                                                formats
                                                hash
                                                ext
                                                mime
                                                size
                                                url
                                                previewUrl
                                                provider
                                                provider_metadata
                                                createdAt
                                                updatedAt
                                            }
                                        }
                                    }
                                    article {
                                        data {
                                            attributes {
                                                slug
                                                image {
                                                    data {
                                                        id
                                                        attributes {
                                                            name
                                                            alternativeText
                                                            caption
                                                            width
                                                            height
                                                            formats
                                                            hash
                                                            ext
                                                            mime
                                                            size
                                                            url
                                                            previewUrl
                                                            provider
                                                            provider_metadata
                                                            createdAt
                                                            updatedAt
                                                        }
                                                    }
                                                }
                                                title
                                                summary
                                            }
                                        }
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
            query GeneralPage($slug: String) {
                pages(filters: { slug: { eq: $slug } }) {
                    data {
                        attributes {
                            title
                            slug
                            seo {
                                metaTitle
                                metaDescription
                                meta {
                                    name
                                    content
                                }
                                preventIndexing
                                structuredData
                                metaImage {
                                    data {
                                        id
                                        attributes {
                                            name
                                            alternativeText
                                            caption
                                            width
                                            height
                                            formats
                                            hash
                                            ext
                                            mime
                                            size
                                            url
                                            previewUrl
                                            provider
                                            provider_metadata
                                            createdAt
                                            updatedAt
                                        }
                                    }
                                }
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
                                        data {
                                            id
                                            attributes {
                                                name
                                                alternativeText
                                                caption
                                                width
                                                height
                                                formats
                                                hash
                                                ext
                                                mime
                                                size
                                                url
                                                previewUrl
                                                provider
                                                provider_metadata
                                                createdAt
                                                updatedAt
                                            }
                                        }
                                    }
                                }
                                ... on ComponentBlocksStandardHeader {
                                    __typename
                                    title
                                    summary
                                    headerImage {
                                        data {
                                            id
                                            attributes {
                                                name
                                                alternativeText
                                                caption
                                                width
                                                height
                                                formats
                                                hash
                                                ext
                                                mime
                                                size
                                                url
                                                previewUrl
                                                provider
                                                provider_metadata
                                                createdAt
                                                updatedAt
                                            }
                                        }
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
