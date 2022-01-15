import { gql } from "@apollo/client";
import client from "./apolloClient";
import { GlobalData } from "./__generated__/GlobalData";
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
                            }
                        }
                    }
                }
            }
        `,
    });
    return data;
};

export const getGlobalData = async () => {
    const { data } = await client.query<GlobalData>({
        query: gql`
            query GlobalData {
                global {
                    data {
                        attributes {
                            SiteTitle
                            SiteTagline
                            footer {
                                footerColumns {
                                    title
                                    links {
                                        id
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                }
                                footerImage {
                                    data {
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
                                        }
                                    }
                                }
                                footerText
                            }
                            navigation {
                                logo {
                                    data {
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
                                        }
                                    }
                                }
                                leftButton {
                                    link {
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                }
                                links {
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
        `,
    });
    return data;
};
