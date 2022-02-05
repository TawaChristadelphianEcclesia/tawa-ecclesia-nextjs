import { getHomePageData } from "../api/pageQueries";
import { getGlobalData } from "../api/globalQueries";
import {
    HomePageData_home_data_attributes_Blocks,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksHero,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard,
} from "../api/__generated__/HomePageData";
import { ISeoData } from "../components/elements/Seo";
import { IGlobalData } from "../components/layouts/DefaultLayout";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IHomePageTemplate } from "../components/templates/HomePage";
import { getEventsData } from "./EventData";
import { mapAPIToBlock } from "./Blocks";



export const getHomePageProps = async (): Promise<IHomePageTemplate> => {
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
            src: pageAPIData?.seo?.metaImage?.data?.attributes?.url || "",
            alt:
                pageAPIData?.seo?.metaImage?.data?.attributes
                    ?.alternativeText || "",
            blurDataURL:
                pageAPIData?.seo?.metaImage?.data?.attributes?.formats
                    ?.thumbnail?.url || "",
        },
    };
    const blocks = await Promise.all(
        (pageAPIData?.Blocks?.map(
            async (block) =>
                await mapAPIToBlock(
                    block as HomePageData_home_data_attributes_Blocks
                )
        ).filter((block) => block !== undefined) as Promise<IBlock>[]) || []
    );
    const globalData: IGlobalData = {
        headerData: {
            siteTitle: globalAPIData?.SiteTitle || "",
            siteLogo: globalAPIData?.navigation?.logo
                ? {
                      src:
                          globalAPIData?.navigation?.logo?.data?.attributes
                              ?.url || "",
                  }
                : undefined,
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
            footerIcon: globalAPIData?.footer?.footerImage
                ? {
                      src:
                          globalAPIData?.footer?.footerImage?.data?.attributes
                              ?.url || "",
                  }
                : undefined,
        },
    };
    return {
        globalData,
        pageData: {
            seo,
            blocks,
        },
    };
};
