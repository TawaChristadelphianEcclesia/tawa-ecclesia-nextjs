import { IVideosPage } from "../components/templates/VideosPage";
import {
    getVideoHomePageData as getAPIVideoHomePageData,
    getVideoListData,
} from "../api/videoQueries";
import { getSeoData } from "./SeoData";
import { getGlobalData } from "./GlobalData";
import { IVideoCard } from "../components/elements/VideoCard";
import { getImageData } from "./ImageData";

export const getVideoHomePageData = async (): Promise<IVideosPage> => {
    const data = await (
        await getAPIVideoHomePageData()
    ).videoPage?.data?.attributes;
    const seo = getSeoData(data?.seo);
    const videos: IVideoCard[] =
        (await (
            await getVideoListData()
        ).videos?.data.map(({ attributes }) => ({
            image: getImageData(
                attributes?.image.data?.attributes ?? undefined
            ),
            title: attributes!.title ?? "",
            subtitle: attributes!.subtitle ?? "",
            description: attributes!.description ?? "",
            tags: attributes!.categories?.data
                .filter((category) => category.attributes?.name)
                .map((category) => category.attributes?.name || "") as string[],
        }))) ?? [];
    const pageData: IVideosPage["pageData"] = {
        seo,
        headerData: {
            title: data?.title || "",
            subtitle: data?.subtitle || "",
        },
        videos,
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
