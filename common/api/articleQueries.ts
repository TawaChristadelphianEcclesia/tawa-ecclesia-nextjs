import { gql } from "@apollo/client";
import client from "./apolloClient";
import { Article } from "./__generated__/Article";
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
