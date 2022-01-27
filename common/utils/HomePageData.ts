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

const mapAPIToBlock = async (
    apiBlock: HomePageData_home_data_attributes_Blocks
): Promise<IBlock | undefined> => {
    switch (apiBlock.__typename) {
        case "ComponentBlocksHero":
            const apiHeroData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksHero;
            return {
                component: "hero",
                data: {
                    alt:
                        apiHeroData.image?.data?.attributes?.alternativeText ||
                        "",
                    image: apiHeroData.image?.data?.attributes?.url || "",
                    imageBlurDataURL:
                        apiHeroData.image?.data?.attributes?.formats?.thumbnail
                            ?.url || "",
                    title: apiHeroData.title,
                    subtitle: apiHeroData.text,
                    textColor: apiHeroData.color || undefined,
                },
            };
        case "ComponentBlocksEventList":
            const apiEventComponentData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList;
            return {
                component: "events" as IBlock["component"],
                data: {
                    title: apiEventComponentData.title ?? "",
                    noEventsPlaceholder:
                        apiEventComponentData.noEventsPlaceholder ?? "",
                    filter: apiEventComponentData.filter ?? "all",
                    events: await getEventsData(),
                },
            } as IBlock;
        case "ComponentBlocksContactForm":
            const apiContactFormData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm;
            return {
                component: "contact" as IBlock["component"],
                data: {
                    title: apiContactFormData.title,
                    endpoint: apiContactFormData.endpoint,
                },
            } as IBlock;
        case "ComponentBlocksImageCard":
            const apiImageBlockData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard;
            return {
                component: "imagecard" as IBlock["component"],
                data: {
                    title: apiImageBlockData.title,
                    body: apiImageBlockData.body,
                    alt:
                        apiImageBlockData.image?.data?.attributes
                            ?.alternativeText || "",
                    src: apiImageBlockData.image?.data?.attributes?.url || "",
                    imageBlurDataURL:
                        apiImageBlockData.image?.data?.attributes?.formats
                            ?.thumbnail?.url || "",
                    leftLink: apiImageBlockData.leftLink
                        ? {
                              url: apiImageBlockData.leftLink?.href,
                              label: apiImageBlockData.leftLink?.label,
                          }
                        : undefined,
                    rightLink: apiImageBlockData.rightLink
                        ? {
                              url: apiImageBlockData.rightLink?.href,
                              label: apiImageBlockData.rightLink?.label,
                          }
                        : undefined,
                },
                // data: {
                //     title: apiData.title,
                //     endpoint: apiData.endpoint,
                // },
            } as IBlock;
    }
};

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
            url: pageAPIData?.seo?.metaImage?.data?.attributes?.url || "",
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
                      url:
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
                      url:
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
