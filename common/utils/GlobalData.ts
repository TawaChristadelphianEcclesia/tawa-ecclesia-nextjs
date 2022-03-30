import { IGlobalData } from "../components/layouts/DefaultLayout";
import { getGlobalData as getAPIGlobalData } from "../api/globalQueries";

export const getGlobalData = async (): Promise<IGlobalData> => {
    const globalAPIData = await (
        await getAPIGlobalData()
    ).global?.data?.attributes;
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
            youTubeLink: globalAPIData?.YouTubeLink ?? undefined,
            faceBookLink: globalAPIData?.FacebookLink ?? undefined,
            instagramLink: globalAPIData?.InstagramLink ?? undefined,
        },
    };
    return globalData;
};
