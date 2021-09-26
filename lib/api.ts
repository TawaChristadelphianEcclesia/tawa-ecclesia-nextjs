import { Client } from "../prismic-config";
import Prismic from "@prismicio/client";
import { RichTextBlock } from "prismic-reactjs";

export interface IEventData {
  title: RichTextBlock[];
  presenter: RichTextBlock[];
  description: RichTextBlock[];
  time: string;
}

export type IAllEventsData = IEventData[];

export async function getAllEvents(): Promise<IAllEventsData> {
  const eventDocuments = await Client.query(
    Prismic.predicates.at("document.type", "event"),
    { pageSize: 100 }
  );
  const eventData = eventDocuments.results.map((result) => {
    return {
      title: result.data.title,
      presenter: result.data.presenter,
      description: result.data.event_description,
      time: result.data.event_date,
    };
  });
  return eventData;
}

export interface IFooterData {
  footerText: string;
  footerLinks: ILinkData[];
}
// inteface IFoot
export async function getFooterData(): Promise<IFooterData> {
  return {
    footerLinks: [
      {
        label: "link",
        src: "/link",
      },
    ],
    footerText: "Footer Text",
  };
}

export interface IHeaderData {
  siteTagLine: RichTextBlock[];
  siteLogo: IImageData;
}

export async function getHeaderData(): Promise<IHeaderData> {
  var layoutDocument = await Client.getSingle("layout", {});
  //   console.log(layoutDocument.data);
  return {
    siteTagLine: layoutDocument.data.site_tagline,
    siteLogo: {
      url: layoutDocument.data.site_logo.url,
      alt: layoutDocument.data.site_logo.alt,
    },
  };
}

export interface IHomePageData {
  title: RichTextBlock[];
  subtitle: RichTextBlock[];
  image: IImageData;
  textColor: string;
}

export async function getHomePageData(): Promise<IHomePageData> {
  const homepage = await Client.getSingle("homepage", {});
  //   console.log(homepage);
  return {
    title: homepage.data.title,
    subtitle: homepage.data.subtitle,
    image: {
      url: homepage.data.hero_image.url,
      alt: homepage.data.hero_image.alt,
    },
    textColor: homepage.data.title_color,
  };
}

interface IPageId {
  params: {
    id: any;
  };
}

export async function getAllPageIds(): Promise<IPageId[]> {
  const pages = await Client.query(
    Prismic.predicates.at("document.type", "general_page"),
    { pageSize: 100 }
  );
  var ids = pages.results.map((result) => {
    // console.log(result);
    return {
      params: {
        id: result.uid,
      },
    };
  });
  //   console.log(ids);
  return ids;
}

export interface IPageData {
  title: RichTextBlock[];
  subtitle: RichTextBlock[];
  image: IImageData;
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
  var pageData = await Client.getByUID("general_page", uid, {});
  console.log(pageData.data.body);
  return {
    title: pageData.data.title,
    subtitle: pageData.data.subtitle,
    image: {
      url: pageData.data.hero_image.url,
      alt: pageData.data.hero_image.alt,
    },
    textColor: pageData.data.title_color,
    body: pageData.data.body
  };
}
