import { gql } from "@apollo/client";
import client from "./apolloClient";
import { GlobalData } from "./__generated__/GlobalData";

export const getGlobalData = async () => {
    const { data } = await client.query<GlobalData>({
        query: gql`
            query GlobalData {
                global {
                    data {
                        attributes {
                            SiteTitle
                            SiteTagline
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
                                    data {
                                        attributes {
                                            name
                                            alternativeText
                                            caption
                                            width
                                            height
                                            formats
                                            hash
                                            ext
                                            mime
                                            size
                                            url
                                            previewUrl
                                            provider
                                            provider_metadata
                                        }
                                    }
                                }
                                footerText
                            }
                            navigation {
                                logo {
                                    data {
                                        attributes {
                                            name
                                            alternativeText
                                            caption
                                            width
                                            height
                                            formats
                                            hash
                                            ext
                                            mime
                                            size
                                            url
                                            previewUrl
                                            provider
                                            provider_metadata
                                        }
                                    }
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
    return data;
};
