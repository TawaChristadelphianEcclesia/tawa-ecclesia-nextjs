import { HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes } from "../api/__generated__/HomePageData";

export const getImageData = (
    attributes?: HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes
): IImageData =>
    attributes
        ? {
              alt: attributes?.alternativeText || "",
              url: attributes?.url || "",
              blurDataUrl: attributes?.formats?.thumbnail?.url || "",
          }
        : { alt: "", url: "", blurDataUrl: "" };
