import { gql } from "@apollo/client";
import client from "./apolloClient";
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
                                    title
                                    filter
                                    noEventsPlaceholder
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
                            }
                        }
                    }
                }
            }
        `,
    });
    return data;
};