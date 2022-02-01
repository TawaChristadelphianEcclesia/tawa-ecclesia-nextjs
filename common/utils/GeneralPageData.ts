import { getGeneralPageData, getPageSlugs } from "../api/pageQueries";
import { GeneralPage_pages_data_attributes_blocks } from "../api/__generated__/GeneralPage";
import { IBlock } from "../components/modules/blocks/BlockManager";
import { IGeneralPageTemplate } from "../components/templates/GeneralPage";
import { mapAPIToBlock } from "./Blocks";
import { getGlobalData } from "./GlobalData";
import { getSeoData } from "./SeoData";

export const getAllPageSlugs = async () => {
    const data = await getPageSlugs();
    return data.pages
        ? data.pages?.data
              .filter((page) => page.attributes?.slug !== undefined)
              .map((page) => ({
                  params: {
                      slug: page.attributes?.slug,
                  },
              }))
        : [];
};

export const getGeneralPageProps = async (
    slug: string
): Promise<IGeneralPageTemplate> => {
    const data = await getGeneralPageData(slug);
    const globalData = await getGlobalData();
    const seo = getSeoData(data?.attributes?.seo);
    const blocks = await Promise.all(
        (data?.attributes?.blocks
            ?.map(
                async (block) =>
                    await mapAPIToBlock(
                        block as GeneralPage_pages_data_attributes_blocks
                    )
            )
            .filter((block) => block !== undefined) as Promise<IBlock>[]) || []
    );
    return {
        globalData,
        pageData: {
            seo,
            blocks,
        },
    };
};
