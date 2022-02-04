import Prismic from "@prismicio/client";
import { Document } from "@prismicio/client/types/documents";
import {
    LinkField,
    LinkType,
    PrismicDocument,
    SliceZone,
} from "@prismicio/types";
import { getPlaiceholder } from "plaiceholder";
import { Link, RichText, RichTextBlock } from "prismic-reactjs";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME ?? "tawa-website-poc";
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
    accessToken: API_TOKEN,
});

export const prismicLinkResolver = function (doc: Document | PrismicDocument) {
    // if (doc.isBroken) {
    //   return "/not-found";
    // }
    if (doc.type === "homepage") {
        return "/";
    }
    if (doc.type === "general_page") {
        return "/" + doc.uid;
    }
    if (doc.type === "blog_page") {
        return "/articles";
    }
    if (doc.type === "blog_post") {
        return "/articles/" + doc.uid;
    }
    return "/";
};

export interface IEventData {
    title: RichTextBlock[];
    presenter: RichTextBlock[];
    description: RichTextBlock[];
    time: string;
}

export type IAllEventsData = IEventData[];

interface ILinkData {
    label: string;
    url: string;
}

export interface IFooterData {
    footerText: RichTextBlock[];
    footerLinks: ILinkData[];
    footerIcon: IImageData;
}
// inteface IFoot
export async function getFooterData(): Promise<IFooterData> {
    var layoutDocument = await PrismicClient.getSingle("layout", {});
    return {
        footerLinks: (layoutDocument.data as any).footer_links.map(
            (link: PrismicLinkField) => {
                return {
                    label: RichText.asText(link.link_label),
                    url: prismicLinkResolver(link.link),
                };
            }
        ),
        footerText: (layoutDocument.data as any).footer_text,
        footerIcon: {
            url: (layoutDocument.data as any).footer_icon.url,
            alt: (layoutDocument.data as any).footer_icon.alt,
        },
    };
}

export interface IHeaderData {
    siteTagLine: RichTextBlock[];
    siteLogo: IImageData;
    headerLinks: ILinkData[];
}

interface PrismicLinkField {
    link_label: RichTextBlock[];
    link: PrismicDocument;
}

export async function getHeaderData(): Promise<IHeaderData> {
    var layoutDocument = await PrismicClient.getSingle("layout", {});
    return {
        siteTagLine: (layoutDocument.data as any).site_tagline,
        siteLogo: {
            url: (layoutDocument.data as any).site_logo.url,
            alt: (layoutDocument.data as any).site_logo.alt,
        },
        headerLinks: (layoutDocument.data as any).header_links.map(
            (link: PrismicLinkField) => {
                return {
                    label: RichText.asText(link.link_label),
                    url: prismicLinkResolver(link.link),
                };
            }
        ),
    };
}

export interface IHomePageData {
    title: RichTextBlock[];
    subtitle: RichTextBlock[];
    image: IImageData;
    textColor: string;
    showEvents: boolean;
}

export async function getHomePageData(): Promise<IHomePageData> {
    const homepage = await PrismicClient.getSingle("homepage", {});
    var plaiceholderData = await getPlaiceholder((homepage.data as any).hero_image.url);
    return {
        title: (homepage.data as any).title,
        subtitle: (homepage.data as any).subtitle,
        image: {
            url: (homepage.data as any).hero_image.url,
            alt: (homepage.data as any).hero_image.alt,
            blurDataUrl: plaiceholderData.base64,
        },
        textColor: (homepage.data as any).title_color,
        showEvents: (homepage.data as any).show_events,
    };
}

interface IPageId {
    params: {
        id: any;
    };
}

export async function getAllPageIds(): Promise<IPageId[]> {
    const pages = await PrismicClient.query(
        Prismic.predicates.at("document.type", "general_page"),
        { pageSize: 100 }
    );
    var ids = pages.results.map((result) => {
        return {
            params: {
                id: result.uid,
            },
        };
    });
    return ids;
}

export interface IPageData {
    title: RichTextBlock[];
    subtitle: RichTextBlock[];
    heroImage: IImageData;
    headingType: "Full Bleed" | "Standard";
    textColor: string;
    body: ISliceData[];
}

export interface ISliceData {
    slice_type: string;
    slice_label: string | null;
    items: any[];
    primary: any;
}

export async function getPageData(uid: string): Promise<IPageData> {
    var pageData = await PrismicClient.getByUID("general_page", uid, {});
    var plaiceholderData = await getPlaiceholder((pageData.data as any).hero_image.url);
    return {
        title: (pageData.data as any).title,
        subtitle: (pageData.data as any).subtitle,
        heroImage: {
            url: (pageData.data as any).hero_image.url,
            alt: (pageData.data as any).hero_image.alt,
            blurDataUrl: plaiceholderData.base64,
        },
        headingType: (pageData.data as any).hero_display,
        textColor: (pageData.data as any).title_color,
        body: (pageData.data as any).body,
    };
}
