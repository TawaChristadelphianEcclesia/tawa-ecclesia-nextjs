import { gql } from "@apollo/client";
import client from "./apolloClient";
import { SEO_FIELDS, UPLOAD_FILE_FRAGMENT } from "./fragments";
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
            ${UPLOAD_FILE_FRAGMENT}
            query ArticleList {
                articles {
                    data {
                        attributes {
                            slug
                            title
                            summary
                            publishedAt
                            image {
                                ...UploadFileEntityResponseFragment
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
            ${UPLOAD_FILE_FRAGMENT}
            ${SEO_FIELDS}
            query Article($slug: String) {
                articles(filters: { slug: { eq: $slug } }) {
                    data {
                        attributes {
                            seo {
                                ...SeoFieldsFragment
                            }
                            slug
                            title
                            summary
                            image {
                                ...UploadFileEntityResponseFragment
                            }
                            content
                            blocks {
                                ... on ComponentBlocksRelatedArticles {
                                    __typename
                                    Title
                                    articles {
                                        data {
                                            attributes {
                                                title
                                                slug
                                                image {
                                                    ...UploadFileEntityResponseFragment
                                                }
                                                summary
                                                content
                                                categories {
                                                    data {
                                                        attributes {
                                                            name
                                                        }
                                                    }
                                                }
                                                publishedAt
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
    return data.articles?.data ? data.articles?.data[0] : undefined;
};

export const getArticleHomePageData = async () => {
    const { data } = await client.query<ArticleHomePage>({
        query: gql`
            ${SEO_FIELDS}
            query ArticleHomePage {
                blogPage {
                    data {
                        attributes {
                            seo {
                                ...SeoFieldsFragment
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
