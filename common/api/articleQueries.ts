import { gql } from "@apollo/client";
import client from "./apolloClient";
import { Article } from "./__generated__/Article";
import { ArticleHomePage } from "./__generated__/ArticleHomePage";
import { ArticleList } from "./__generated__/ArticleList";
import { ArticleSlugs } from "./__generated__/ArticleSlugs";

export const getArticleSlugs = async () => {
    const { data } = await client.query<ArticleSlugs>({
        query: gql`
            query ArticleSlugs {
                articles {
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

export const getArticleList = async () => {
    const { data } = await client.query<ArticleList>({
        query: gql`
            query ArticleList {
                articles {
                    data {
                        attributes {
                            slug
                            title
                            summary
                            publishedAt
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
                            categories {
                                data {
                                    attributes {
                                        name
                                    }
                                }
                            }
                            content
                        }
                    }
                }
            }
        `,
    });
    return data.articles?.data ? data.articles?.data : [];
};

export const getArticleData = async (slug: string) => {
    const { data } = await client.query<Article>({
        query: gql`
            query Article($slug: String) {
                articles(filters: { slug: { eq: $slug } }) {
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
                            slug
                            title
                            summary
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
                            content
                        }
                    }
                }
            }
        `,
        variables: { slug },
    });
    return data.articles?.data ? data.articles?.data[0] : undefined;
};

export const getArticleHomePageData = async () => {
    const { data } = await client.query<ArticleHomePage>({
        query: gql`
            query ArticleHomePage {
                blogPage {
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
                            articlesPerPage
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
