export interface IHomePageData {
  title: string;
  subtitle: string;
  image: IImageData;
  textColor: string;
}

export async function getHomePageData(): Promise<IHomePageData> {
  return {
    title: "Lorem Ipsum",
    subtitle:
      "In ante metus dictum at tempor commodo ullamcorper. Laoreet id donec ultrices tincidunt arcu non.",
    image: {
      src: "https://images.ctfassets.net/2xwhdgg5nph4/5iaJQ7mqHJ1S3WBynKDdLO/f9e7abccf62d55abc830d31568dbd589/photo-1509021436665-8f07dbf5bf1d?w=1920&h=1440&q=100&fm=webp&fit=fill",
    },
    textColor: "#ffffff",
  };
}
