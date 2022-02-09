import { getHomePageData } from "../api/pageQueries";
import { HomePageData_home_data_attributes_Blocks } from "../api/__generated__/HomePageData";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IHomePageTemplate } from "../components/templates/HomePage";
import { mapAPIToBlock } from "./Blocks";
import { getSeoData } from "./SeoData";
import { getGlobalData } from "./GlobalData";

export const getHomePageProps = async (): Promise<IHomePageTemplate> => {
    const pageAPIData = await (await getHomePageData()).home?.data?.attributes;
    const seo = getSeoData(pageAPIData?.seo);
    const blocks = await Promise.all(
        (pageAPIData?.Blocks?.map(
            async (block) =>
                await mapAPIToBlock(
                    block as HomePageData_home_data_attributes_Blocks
                )
        ).filter((block) => block !== undefined) as Promise<IBlock>[]) || []
    );
    const globalData = await getGlobalData();
    return {
        globalData,
        pageData: {
            seo,
            blocks,
        },
    };
};
