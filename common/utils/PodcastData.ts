import { getAudioDurationInSeconds } from "get-audio-duration";
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

// function getDuration(src: string): Promise<number> {
//     return new Promise(function (resolve) {
//         var audio = new Audio();
//         audio.onloadedmetadata = () => {
//             resolve(audio.duration);
//         };
//         audio.src = src;
//     });
// }

const getPodcastData = async (data: Podcasts): Promise<IPodcastData[]> => {
    return Promise.all(
        data.podcasts?.data.map(async (podcast) => ({
            title: podcast.attributes!.title,
            description: podcast.attributes!.description ?? "",
            date: new Date(podcast.attributes!.publishedAt as string),
            image: getImageData(
                podcast.attributes!.thumbnail.data?.attributes!
            ),
            fileUrl: podcast.attributes?.audio.data?.attributes?.url ?? "",
            duration: await getAudioDurationInSeconds(
                podcast.attributes?.audio.data?.attributes?.url ?? ""
            ),
        })) || []
    );
};

export const getPodcastHomePageData = async (): Promise<IPodcastsPage> => {
    const homepageData = await (
        await getAPIPodcastHomePageData()
    ).podcastPage?.data?.attributes;
    const podcastsData = await getAPIPodcastsData();
    const seo = getSeoData(homepageData?.seo);
    const podcasts = await getPodcastData(podcastsData);

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
