import { getGlobalData, getHomePageData } from "../api/pageQueries";
import { ISeoData } from "../components/elements/Seo";
import { IGlobalData } from "../components/layouts/DefaultLayout";
import { IHomePage } from "../components/templates/HomePage";

export const getHomePageProps = async (): Promise<IHomePage> => {
    const pageAPIData = await (await getHomePageData()).home?.data?.attributes;
    const globalAPIData = await (
        await getGlobalData()
    ).global?.data?.attributes;
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
                pageAPIData?.seo?.metaImage?.data?.attributes?.previewUrl || "",
        },
    };
    const globalData: IGlobalData = {
        headerData: {
            siteTitle: globalAPIData?.SiteTitle || "",
            siteLogo: {
                url:
                    globalAPIData?.navigation?.logo?.data?.attributes?.url ||
                    "",
            },
            // todo - link resolver for if no href
            headerLinks:
                globalAPIData?.navigation?.links?.map((link) => ({
                    label: link?.label || "",
                    url: link?.href || "",
                })) || [],
        },
        footerData: {
            footerText: globalAPIData?.footer?.footerText || "",
            footerColumns:
                globalAPIData?.footer?.footerColumns?.map((column) => ({
                    title: column?.title || "",
                    links:
                        column?.links
                            ?.filter((link) => link !== null)
                            // todo - link resolver for if no href
                            .map((link) => ({
                                label: link?.label || "",
                                url: link?.href || "",
                            })) || [],
                })) || [],
            footerIcon: {
                url:
                    globalAPIData?.footer?.footerImage?.data?.attributes?.url ||
                    "",
            },
        },
    };
    return {
        globalData,
        pageData: {
            seo,
        },
    };
};
