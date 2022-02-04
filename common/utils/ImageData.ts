import { HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes } from "../api/__generated__/HomePageData";

type ImageSizes = "thumbnail" | "small" | "medium" | "large";

export const getImageData = (
    attributes?: HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes,
    imageSize: ImageSizes = "large"
): IImageData =>
    attributes
        ? {
              alt: attributes?.alternativeText || "",
              url: attributes?.formats?.[imageSize]?.url || "",
              blurDataUrl: attributes?.formats?.thumbnail?.url || "",
          }
        : { alt: "", url: "", blurDataUrl: "" };
