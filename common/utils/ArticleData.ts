import {
    getArticleSlugs,
    getArticleData as getAPIArticleData,
} from "../api/articleQueries";
import { ISeoData } from "../components/elements/Seo";
import { IArticleData } from "../components/templates/Article";
import { getGlobalData } from "./GlobalData";

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
