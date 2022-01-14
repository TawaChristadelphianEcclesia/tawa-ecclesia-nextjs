import { IHomePageData } from "../components/templates/HomePage";

// type IHomePageDataSerializable = IHomePageData & {
//     eventData: {
//         events: {
//             datetime: string;
//         }[];
//     };
//     headerData: {
//         textPosition: string;
//     };
// };

const getHomePageData = (): IHomePageData => {
    const dummyPageData = {
        seo: {
            metaTitle: "Test",
            metaDescription: "Test default layout story",
            metaTags: [],
            preventIndexing: false,
            structuredData: "{}",
            metaImage: {
                url: "./bible_logo.svg",
            },
        },
        headerData: {
            title: "Tawa Christadelphians",
            subtitle:
                "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
            textPosition: "topcenter",
            image: "/bible_photo.jpg",
            imageBlurDataURL: "/bible_photo.jpg",
            alt: "alt text",
            textColor: "white",
        },
        eventData: {
            title: "coming up",
            filter: "all",
            events: [
                {
                    title: "Past Event Title",
                    presenter: "Event Presenter",
                    datetime: "2020-12-09T04:48:09.745Z",
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
                {
                    title: "Event Today",
                    presenter: "Event Presenter",
                    datetime: "2022-01-01T19:39:57.082Z",
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
                {
                    title: "Future Event",
                    presenter: "Event Presenter",
                    datetime: "2100-12-09T04:48:09.745Z",
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
            ],
        },
    };
    const dummyPageDataConverted: IHomePageData = {
        ...dummyPageData,
        headerData: {
            ...dummyPageData.headerData,
            textPosition: dummyPageData.headerData
                .textPosition as IHomePageData["headerData"]["textPosition"],
        },
        eventData: {
            ...dummyPageData.eventData,
            filter: dummyPageData.eventData
                .filter as IHomePageData["eventData"]["filter"],
            events: dummyPageData.eventData.events.map((event) => ({
                ...event,
                datetime: new Date(event.datetime),
            })),
        },
    };
    return dummyPageDataConverted;
};

// export const convertHomePageData = (): IHomePageData => {
//     const dummyPageDataConverted: IHomePageData = {
//         ...dummyPageData,
//         headerData: {
//             ...dummyPageData.headerData,
//             textPosition: dummyPageData.headerData
//                 .textPosition as IHomePageData["headerData"]["textPosition"],
//         },
//         eventData: {
//             ...dummyPageData.eventData,
//             filter: dummyPageData.eventData
//                 .filter as IHomePageData["eventData"]["filter"],
//             events: dummyPageData.eventData.events.map((event) => ({
//                 ...event,
//                 datetime: new Date(event.datetime),
//             })),
//         },
//     };
//     return dummyPageDataConverted;
// };

export default getHomePageData;
