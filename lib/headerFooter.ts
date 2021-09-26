import { RichTextBlock } from "prismic-reactjs";
import { Client } from "../prismic-config";

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
  console.log(layoutDocument.data);
  return {
    siteTagLine: layoutDocument.data.site_tagline,
    siteLogo: {
      url: layoutDocument.data.site_logo.url,
      alt: layoutDocument.data.site_logo.alt
    },
  };
}
