import { IPodcastsPage } from "../components/templates/PodcastsPage";
import { getPodcastHomePageData as getAPIPodcastHomePageData } from "../api/podcastQueries";
import { getSeoData } from "./SeoData";
import { getGlobalData } from "./GlobalData";

export const getPodcastHomePageData = async (): Promise<IPodcastsPage> => {
    const data = await (
        await getAPIPodcastHomePageData()
    ).podcastPage?.data?.attributes;
    const seo = getSeoData(data?.seo);
    const pageData: IPodcastsPage["pageData"] = {
        seo,
        headerData: {
            title: data?.title || "",
            subtitle: data?.subtitle || "",
        },
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
