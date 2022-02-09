type PageType = "article";

const ARTICLES_ROOT_PATH = "/articles/";

export const getPathFromSlug = (slug: string, pageType: PageType): string => {
    if (pageType === "article") {
        return ARTICLES_ROOT_PATH + slug;
    } else {
        return "/" + slug;
    }
};
