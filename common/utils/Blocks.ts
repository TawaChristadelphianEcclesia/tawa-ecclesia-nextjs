import {
    Article_articles_data,
    Article_articles_data_attributes,
    Article_articles_data_attributes_blocks,
    Article_articles_data_attributes_blocks_ComponentBlocksRelatedArticles,
} from "../api/__generated__/Article";
import {
    GeneralPage_pages_data_attributes_blocks,
    GeneralPage_pages_data_attributes_blocks_ComponentBlocksHero,
    GeneralPage_pages_data_attributes_blocks_ComponentBlocksStandardHeader,
    GeneralPage_pages_data_attributes_blocks_ComponentBlocksTextContent,
} from "../api/__generated__/GeneralPage";
import {
    HomePageData_home_data_attributes_Blocks,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksHero,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard,
} from "../api/__generated__/HomePageData";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { getEventsData } from "./EventData";
import { getTextReadingTime } from "./ReadingTimeCalculator";
import { getPathFromSlug } from "./SlugCalculator";

export const mapAPIToBlock = async (
    apiBlock:
        | HomePageData_home_data_attributes_Blocks
        | GeneralPage_pages_data_attributes_blocks
        | Article_articles_data_attributes_blocks
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
        case "ComponentBlocksTextContent":
            const apiContentBlockData =
                apiBlock as GeneralPage_pages_data_attributes_blocks_ComponentBlocksTextContent;
            return {
                component: "textcontent" as IBlock["component"],
                data: {
                    content: apiContentBlockData.content || "",
                },
            } as IBlock;
        case "ComponentBlocksStandardHeader":
            const apiStandardHeaderBlockData =
                apiBlock as GeneralPage_pages_data_attributes_blocks_ComponentBlocksStandardHeader;
            return {
                component: "standardheader" as IBlock["component"],
                data: {
                    title: apiStandardHeaderBlockData.title,
                    summary: apiStandardHeaderBlockData.summary ?? undefined,
                    alt:
                        apiStandardHeaderBlockData.headerImage?.data?.attributes
                            ?.alternativeText || "",
                    image: apiStandardHeaderBlockData.headerImage?.data
                        ?.attributes?.url,
                    imageBlurDataURL:
                        apiStandardHeaderBlockData.headerImage?.data?.attributes
                            ?.formats?.thumbnail?.url,
                },
            };
        case "ComponentBlocksRelatedArticles":
            const apiRelatedArticlesBlockData =
                apiBlock as Article_articles_data_attributes_blocks_ComponentBlocksRelatedArticles;
            return {
                component: "relatedarticles" as IBlock["component"],
                data: {
                    title: apiRelatedArticlesBlockData.Title,
                    articles: apiRelatedArticlesBlockData.articles
                        ? apiRelatedArticlesBlockData.articles?.data.map(
                              ({ attributes }) => ({
                                  url: getPathFromSlug(
                                      attributes?.slug as string,
                                      "article"
                                  ),
                                  title: attributes!.title,
                                  titleImage: {
                                      alt:
                                          attributes?.image?.data?.attributes!
                                              .alternativeText || "",
                                      url:
                                          attributes?.image?.data?.attributes!
                                              .url || "",
                                      blurDataURL:
                                          attributes?.image?.data?.attributes!
                                              .formats?.thumbnail?.url || "",
                                  },
                                  summary: attributes!.summary ?? "",
                                  tags: attributes!.categories?.data
                                      .filter(
                                          (category) =>
                                              category.attributes?.name
                                      )
                                      .map(
                                          (category) =>
                                              category.attributes?.name || ""
                                      ) as string[],
                                  datePublished: new Date(
                                      attributes!.publishedAt
                                  ),
                                  readingTime: getTextReadingTime(
                                      attributes!.content || ""
                                  ),
                              })
                          )
                        : [],
                },
            };
    }
};

// url: string;
// title: string;
// titleImage: IImageData;
// summary: string;
// tags: string[];
// datePublished: Date;
// readingTime: number;
