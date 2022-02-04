import {
    getArticleSlugs,
    getArticleData as getAPIArticleData,
    getArticleHomePageData as getAPIArticleHomePageData,
    getArticleList,
} from "../api/articleQueries";
import { Article_articles_data_attributes_blocks } from "../api/__generated__/Article";
import { ISeoData } from "../components/elements/Seo";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IArticleData } from "../components/templates/Article";
import { IArticlesPage } from "../components/templates/ArticlesPage";
import { mapAPIToBlock } from "./Blocks";
import { getGlobalData } from "./GlobalData";
import { getTextReadingTime } from "./ReadingTimeCalculator";
import { getSeoData } from "./SeoData";
import { getPathFromSlug } from "./SlugCalculator";

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
    const seo = getSeoData(pageAPIData?.seo);
    const blocks = await Promise.all(
        (pageAPIData?.blocks
            ?.map(
                async (block) =>
                    await mapAPIToBlock(
                        block as Article_articles_data_attributes_blocks
                    )
            )
            .filter((block) => block !== undefined) as Promise<IBlock>[]) || []
    );
    const pageData: IArticleData["pageData"] = {
        seo,
        title: pageAPIData?.title || "",
        summary: pageAPIData?.summary || "",
        content: pageAPIData?.content || "",
        image: {
            url: pageAPIData?.image?.data?.attributes?.url || "",
            blurDataUrl:
                pageAPIData?.image?.data?.attributes?.formats?.thumbnail?.url ||
                "",
            alt:
                pageAPIData?.image?.data?.attributes?.alternativeText ||
                undefined,
        },
        blocks,
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
            blurDataUrl:
                data?.seo?.metaImage?.data?.attributes?.formats?.thumbnail
                    ?.url || "",
        },
    };
    const articles: IArticlesPage["pageData"]["articleData"] = await (
        await getArticleList()
    ).map((articleData) => ({
        url: getPathFromSlug(articleData.attributes?.slug || "", "article"),
        title: articleData.attributes?.title || "",
        titleImage: {
            url: articleData?.attributes?.image?.data?.attributes?.url || "",
            alt:
                articleData?.attributes?.image?.data?.attributes
                    ?.alternativeText || "",
            blurDataUrl:
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
