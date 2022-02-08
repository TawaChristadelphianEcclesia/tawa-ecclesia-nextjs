import {
    IPodcastData,
    IPodcastsPage,
} from "../components/templates/PodcastsPage";
import {
    getPodcastHomePageData as getAPIPodcastHomePageData,
    getPodcasts as getAPIPodcastsData,
} from "../api/podcastQueries";
import { getSeoData } from "./SeoData";
import { getGlobalData } from "./GlobalData";
import { podcasts as tempStoryPodcasts } from "../components/templates/PodcastsPage.stories";
import { Podcasts } from "../api/__generated__/Podcasts";
import { getImageData } from "./ImageData";

// image: IImageData;
// title: string;
// description: string;
// date: Date;
// fileUrl: string;

const getPodcastData = (data: Podcasts): IPodcastData[] => {
    return (
        data.podcasts?.data.map((podcast) => ({
            title: podcast.attributes!.title,
            description: podcast.attributes!.description ?? "",
            date: new Date(podcast.attributes!.publishedAt as string),
            image: getImageData(
                podcast.attributes!.thumbnail.data?.attributes!
            ),
            fileUrl: podcast.attributes?.audio.data?.attributes?.url ?? "",
        })) || []
    );
};

export const getPodcastHomePageData = async (): Promise<IPodcastsPage> => {
    const homepageData = await (
        await getAPIPodcastHomePageData()
    ).podcastPage?.data?.attributes;
    const podcastsData = await getAPIPodcastsData();
    const seo = getSeoData(homepageData?.seo);
    const podcasts = getPodcastData(podcastsData);
    // const podcasts = tempStoryPodcasts;

    const pageData: IPodcastsPage["pageData"] = {
        seo,
        headerData: {
            title: homepageData?.title || "",
            subtitle: homepageData?.subtitle || "",
        },
        podcasts,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
