import {
    getArticleSlugs,
    getArticleData as getAPIArticleData,
    getArticleHomePageData as getAPIArticleHomePageData,
    getArticleList,
} from "../api/articleQueries";
import { ISeoData } from "../components/elements/Seo";
import { IArticleData } from "../components/templates/Article";
import { IArticlesPage } from "../components/templates/ArticlesPage";
import { getGlobalData } from "./GlobalData";
import { getTextReadingTime } from "./ReadingTimeCalculator";

export const getAllArticleSlugs = async () => {
    const data = await getArticleSlugs();
    return data.articles
        ? data.articles.data
              .filter((article) => article.attributes?.slug !== undefined)
              .map((article) => ({
                  params: { slug: article.attributes?.slug },
              }))
        : [];
};

export const getArticleData = async (slug: string): Promise<IArticleData> => {
    const pageAPIData = await (await getAPIArticleData(slug))?.attributes;
    const seo: ISeoData = {
        metaTitle: pageAPIData?.seo?.metaTitle || "",
        metaDescription: pageAPIData?.seo?.metaDescription || "",
        metaTags:
            pageAPIData?.seo?.meta?.map((meta) => ({
                name: meta?.name || "",
                content: meta?.content || "",
            })) || [],
        preventIndexing: pageAPIData?.seo?.preventIndexing || false,
        structuredData: pageAPIData?.seo?.structuredData,
        metaImage: {
            url: pageAPIData?.seo?.metaImage?.data?.attributes?.url || "",
            alt:
                pageAPIData?.seo?.metaImage?.data?.attributes
                    ?.alternativeText || "",
            blurDataURL:
                pageAPIData?.seo?.metaImage?.data?.attributes?.formats
                    ?.thumbnail?.url || "",
        },
    };
    const pageData: IArticleData["pageData"] = {
        seo,
        title: pageAPIData?.title || "",
        summary: pageAPIData?.summary || "",
        content: pageAPIData?.content || "",
        image: pageAPIData?.image?.data?.attributes?.url || "",
        imageBlurDataURL:
            pageAPIData?.image?.data?.attributes?.formats?.thumbnail?.url || "",
        alt: pageAPIData?.image?.data?.attributes?.alternativeText || undefined,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};

export const getArticleHomePageData = async (): Promise<IArticlesPage> => {
    const data = await (
        await getAPIArticleHomePageData()
    ).blogPage?.data?.attributes;
    const seo: ISeoData = {
        metaTitle: data?.seo?.metaTitle || "",
        metaDescription: data?.seo?.metaDescription || "",
        metaTags:
            data?.seo?.meta?.map((meta) => ({
                name: meta?.name || "",
                content: meta?.content || "",
            })) || [],
        preventIndexing: data?.seo?.preventIndexing || false,
        structuredData: data?.seo?.structuredData || "string",
        metaImage: {
            url: data?.seo?.metaImage?.data?.attributes?.url || "",
            alt: data?.seo?.metaImage?.data?.attributes?.alternativeText || "",
            blurDataURL:
                data?.seo?.metaImage?.data?.attributes?.formats?.thumbnail
                    ?.url || "",
        },
    };
    const articles: IArticlesPage["pageData"]["articleData"] = await (
        await getArticleList()
    ).map((articleData) => ({
        url: articleData.attributes?.slug || "",
        title: articleData.attributes?.title || "",
        titleImage: {
            url: articleData?.attributes?.image?.data?.attributes?.url || "",
            alt:
                articleData?.attributes?.image?.data?.attributes
                    ?.alternativeText || "",
            blurDataURL:
                articleData?.attributes?.image?.data?.attributes?.formats
                    ?.thumbnail?.url || "",
        },
        summary: articleData.attributes?.summary || "",
        tags: articleData.attributes?.categories?.data
            .filter((category) => category.attributes?.name)
            .map((category) => category.attributes?.name || "") as string[],
        datePublished: new Date(articleData.attributes?.publishedAt),
        readingTime: getTextReadingTime(articleData.attributes?.content || ""),
    }));
    const pageData: IArticlesPage["pageData"] = {
        seo,
        headerData: {
            title: data?.title || "",
            subtitle: data?.subtitle || "",
        },
        articleData: articles,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
