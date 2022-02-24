import { GeneralPage_pages_data_attributes_seo } from "../api/__generated__/GeneralPage";
import { ISeoData } from "../components/elements/Seo";

export const getSeoData = (
    apiSeoData: GeneralPage_pages_data_attributes_seo | null | undefined
): ISeoData => ({
    metaTitle: apiSeoData?.metaTitle || "",
    metaDescription: apiSeoData?.metaDescription || "",
    metaTags:
        apiSeoData?.meta?.map((meta) => ({
            name: meta?.name || "",
            content: meta?.content || "",
        })) || [],
    preventIndexing: apiSeoData?.preventIndexing || false,
    structuredData: apiSeoData?.structuredData || undefined,
    metaImage: {
        src: apiSeoData?.metaImage?.data?.attributes?.url || "",
        alt: apiSeoData?.metaImage?.data?.attributes?.alternativeText || "",
        blurDataURL:
            apiSeoData?.metaImage?.data?.attributes?.formats?.thumbnail?.url ||
            "",
    },
});
