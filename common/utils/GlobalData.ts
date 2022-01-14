import { IGlobalData } from "../components/layouts/DefaultLayout";

const getGlobalData = (): IGlobalData => {
    const globalData = {
        headerData: {
            siteTagLine: "Tawa Christadelphians",
            siteLogo: {
                url: "/bible_logo.svg",
                alt: "logo",
            },
            headerLinks: [
                {
                    url: "/articles",
                    label: "Articles",
                },
                {
                    url: "/articles/who-are-we",
                    label: "Who Are We?",
                },
                {
                    url: "/articles/gods-purpose-with-the-earth",
                    label: "Our Beliefs",
                },
            ],
        },
        footerData: {
            footerText: "Footer Text",
            footerIcon: {
                url: "/bible_logo.svg",
                alt: "bible logo",
            },
            footerColumns: [
                {
                    title: "title",
                    links: [
                        {
                            url: "/",
                            label: "Home",
                        },
                        {
                            url: "/",
                            label: "About Us",
                        },
                        {
                            url: "/",
                            label: "Our Beliefs",
                        },
                        {
                            url: "/",
                            label: "Articles",
                        },
                    ],
                },
                {
                    title: "title",
                    links: [
                        {
                            url: "/",
                            label: "Home",
                        },
                        {
                            url: "/",
                            label: "About Us",
                        },
                        {
                            url: "/",
                            label: "Our Beliefs",
                        },
                        {
                            url: "/",
                            label: "Articles",
                        },
                    ],
                },
                {
                    title: "title",
                    links: [
                        {
                            url: "/",
                            label: "Home",
                        },
                        {
                            url: "/",
                            label: "About Us",
                        },
                        {
                            url: "/",
                            label: "Our Beliefs",
                        },
                        {
                            url: "/",
                            label: "Articles",
                        },
                    ],
                },
            ],
        },
    };
    return globalData;
};

export default getGlobalData;
