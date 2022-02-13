type PageType = "article";

const ARTICLES_ROOT_PATH = "/articles/";

export const getPathFromSlug = (
    slug: string | undefined,
    pageType: PageType
): string | undefined => {
    if (slug == undefined) {
        return undefined;
    } else if (pageType === "article") {
        return ARTICLES_ROOT_PATH + slug;
    } else {
        return "/" + slug;
    }
};
