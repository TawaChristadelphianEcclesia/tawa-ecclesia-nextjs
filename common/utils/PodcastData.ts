import { IPodcastsPage } from "../components/templates/PodcastsPage";
import { getPodcastHomePageData as getAPIPodcastHomePageData } from "../api/podcastQueries";
import { getSeoData } from "./SeoData";
import { getGlobalData } from "./GlobalData";
import { podcasts as tempStoryPodcasts } from "../components/templates/PodcastsPage.stories";

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
        podcasts: tempStoryPodcasts,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
