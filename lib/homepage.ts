import { RichTextBlock } from "prismic-reactjs";
import { Client } from "../prismic-config";

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
