import { HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes } from "../api/__generated__/HomePageData";

type ImageSizes = "thumbnail" | "small" | "medium" | "large";

export const getImageData = (
    attributes?: HomePageData_home_data_attributes_Blocks_ComponentBlocksVideoHighlight_replaceImage_data_attributes,
    imageSize: ImageSizes = "large"
): IImageData => {
    const hasRequestedSize = !!attributes?.formats?.[imageSize];
    const imageUrl = hasRequestedSize
        ? attributes?.formats?.[imageSize]?.url
        : attributes?.url;
    const data = attributes
        ? {
              alt: attributes?.alternativeText || "",
              src: imageUrl,
              blurDataURL: attributes?.formats?.thumbnail?.url || "",
          }
        : { src: "", url: "", blurDataURL: "" };
    return data;
};
