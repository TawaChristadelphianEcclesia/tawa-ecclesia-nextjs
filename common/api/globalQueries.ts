import { gql } from "@apollo/client";
import client from "./apolloClient";
import { UPLOAD_FILE_FRAGMENT } from "./fragments";
import { GlobalData } from "./__generated__/GlobalData";

export const getGlobalData = async () => {
    const { data, error } = await client.query<GlobalData>({
        query: gql`
            ${UPLOAD_FILE_FRAGMENT}
            query GlobalData {
                global {
                    data {
                        attributes {
                            SiteTitle
                            SiteTagline
                            YouTubeLink
                            FacebookLink
                            InstagramLink
                            footer {
                                footerColumns {
                                    title
                                    links {
                                        id
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                }
                                footerImage {
                                    ...UploadFileEntityResponseFragment
                                }
                                footerText
                            }
                            navigation {
                                logo {
                                    ...UploadFileEntityResponseFragment
                                }
                                leftButton {
                                    link {
                                        href
                                        label
                                        target
                                        isExternal
                                    }
                                }
                                links {
                                    href
                                    label
                                    target
                                    isExternal
                                }
                            }
                        }
                    }
                }
            }
        `,
    });
    if (error) {
        console.error("error in global data query");
        console.log(error);
    }
    return data;
};
