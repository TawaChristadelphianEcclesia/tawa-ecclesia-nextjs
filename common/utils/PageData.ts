import { getPageSlugs } from "../api/pageQueries";

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
