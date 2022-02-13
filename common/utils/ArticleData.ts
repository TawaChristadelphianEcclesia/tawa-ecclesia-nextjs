import {
    getArticleSlugs,
    getArticleData as getAPIArticleData,
    getArticleHomePageData as getAPIArticleHomePageData,
    getArticleList,
} from "../api/articleQueries";
import { Article_articles_data_attributes_blocks } from "../api/__generated__/Article";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IArticleData } from "../components/templates/Article";
import { IArticlesPage } from "../components/templates/ArticlesPage";
import { mapAPIToBlock } from "./Blocks";
import { getGlobalData } from "./GlobalData";
import { getImageData } from "./ImageData";
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
        image: getImageData(pageAPIData?.image?.data?.attributes ?? undefined),
        blocks,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};

export const getArticleHomePageData = async (): Promise<IArticlesPage> => {
    const data = await (
        await getAPIArticleHomePageData()
    ).blogPage?.data?.attributes;
    const seo = getSeoData(data?.seo);
    const articles: IArticlesPage["pageData"]["articleData"] = [
        ...(await getArticleList()),
    ]
        .map((articleData) => ({
            url: getPathFromSlug(articleData.attributes?.slug || "", "article")!,
            title: articleData.attributes?.title || "",
            titleImage: getImageData(
                articleData?.attributes?.image?.data?.attributes ?? undefined
            ),
            summary: articleData.attributes?.summary || "",
            tags: articleData.attributes?.categories?.data
                .filter((category) => category.attributes?.name)
                .map((category) => category.attributes?.name || "") as string[],
            datePublished: new Date(articleData.attributes?.publishedAt),
            readingTime: getTextReadingTime(
                articleData.attributes?.content || ""
            ),
        }))
        .sort((a, b) => b.datePublished.getTime() - a.datePublished.getTime());
    console.log();
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
