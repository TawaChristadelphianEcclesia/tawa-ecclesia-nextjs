import { gql } from "@apollo/client";

export const SEO_FIELDS = gql`
    fragment SeoFieldsFragment on ComponentSharedSeo {
        metaTitle
        metaDescription
        meta {
            name
            content
        }
        preventIndexing
        structuredData
        metaImage {
            data {
                id
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
                    createdAt
                    updatedAt
                }
            }
        }
    }
`;

export const UPLOAD_FILE_FRAGMENT = gql`
    fragment UploadFileEntityResponseFragment on UploadFileEntityResponse {
        data {
            id
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
                createdAt
                updatedAt
            }
        }
    }
`;
