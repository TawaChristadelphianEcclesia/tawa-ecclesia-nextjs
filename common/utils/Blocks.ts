import {
    Article_articles_data_attributes_blocks,
    Article_articles_data_attributes_blocks_ComponentBlocksRelatedArticles,
} from "../api/__generated__/Article";
import {
    GeneralPage_pages_data_attributes_blocks,
    GeneralPage_pages_data_attributes_blocks_ComponentBlocksStandardHeader,
    GeneralPage_pages_data_attributes_blocks_ComponentBlocksTextContent,
} from "../api/__generated__/GeneralPage";
import {
    HomePageData_home_data_attributes_Blocks,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksHero,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksEventList,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksContactForm,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksImageCard,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight,
    HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight,
} from "../api/__generated__/HomePageData";
import { IArticleHighlightBlock } from "../components/modules/blocks/ArticleHighlightBlock";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IVideoHighlightBlock } from "../components/modules/blocks/VideoHighlightBlock";
import { getEventsData } from "./EventData";
import { getImageData } from "./ImageData";
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
                    image: getImageData(
                        apiHeroData.image?.data?.attributes ?? undefined
                    ),
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
                    image: getImageData(
                        apiImageBlockData.image?.data?.attributes ?? undefined
                    ),
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
                    image: getImageData(
                        apiStandardHeaderBlockData.headerImage?.data
                            ?.attributes ?? undefined
                    ),
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
                        ? apiRelatedArticlesBlockData.articles?.data
                              .map(({ attributes }) => ({
                                  url:
                                      getPathFromSlug(
                                          attributes?.slug as string,
                                          "article"
                                      ) ?? "/",
                                  title: attributes!.title,
                                  titleImage: getImageData(
                                      attributes?.image?.data?.attributes ??
                                          undefined,
                                      "small"
                                  ),
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
                              }))
                              .sort(
                                  (a, b) =>
                                      b.datePublished.getTime() -
                                      a.datePublished.getTime()
                              )
                        : [],
                },
            };
        case "ComponentBlocksArticleHighlight":
            const apiArticleHighlightBlockData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksArticleHighlight;
            const articleBlockData: IArticleHighlightBlock = {
                title: apiArticleHighlightBlockData.title,
                subtitle: apiArticleHighlightBlockData.subtitle ?? "",
                image: getImageData(
                    apiArticleHighlightBlockData?.replaceimage?.data
                        ?.attributes ?? undefined
                ),
                body: apiArticleHighlightBlockData.description ?? "",
                highlightArticle: apiArticleHighlightBlockData.articles?.data[0]
                    ? {
                          url:
                              getPathFromSlug(
                                  apiArticleHighlightBlockData.articles?.data[0]
                                      .attributes?.slug,
                                  "article"
                              ) ?? "/",
                          title: apiArticleHighlightBlockData.articles?.data[0]
                              .attributes!.title,
                          description:
                              apiArticleHighlightBlockData.articles?.data[0]
                                  .attributes?.summary ?? "",
                      }
                    : undefined,
            };
            return {
                component: "articlehighlight" as IBlock["component"],
                data: articleBlockData,
            };
        case "ComponentBlocksVideoHighlight":
            const apiVideoHighlightBlockData =
                apiBlock as HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight;
            const videoBlockData: IVideoHighlightBlock = {
                image: getImageData(
                    apiVideoHighlightBlockData.replaceImage?.data?.attributes ??
                        undefined
                ),
                title: apiVideoHighlightBlockData.title,
                subtitle: apiVideoHighlightBlockData.subtitle ?? undefined,
                body: apiVideoHighlightBlockData.description ?? "",
                highlightVideo: apiVideoHighlightBlockData.videos?.data[0]
                    ? {
                          url: apiVideoHighlightBlockData.videos!.data[0]
                              .attributes!.url!,
                          title: apiVideoHighlightBlockData.videos!.data[0]
                              .attributes!.title!,
                          description:
                              apiVideoHighlightBlockData.videos!.data[0]
                                  .attributes!.description ?? undefined,
                      }
                    : undefined,
            };
            return {
                component: "videohighlight",
                data: videoBlockData,
            };
    }
};
