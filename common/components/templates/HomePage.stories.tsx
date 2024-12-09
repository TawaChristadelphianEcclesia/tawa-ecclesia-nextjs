import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HomePage from "./HomePage";

const meta: Meta<typeof HomePage> = {
    title: "Templates/Home Page",
    component: HomePage,
};
export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
    args: {
        globalData: {
            headerData: {
                siteTitle: "Tawa Christadelphians",
                siteLogo: {
                    src: "/bible_logo.svg",
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
                    src: "./bible_logo.svg",
                    alt: "bible logo",
                },
                footerColumns: [
                    {
                        title: "title",
                        links: [
                            { url: "/", label: "Home" },
                            { url: "/", label: "About Us" },
                            { url: "/", label: "Our Beliefs" },
                            { url: "/", label: "Articles" },
                        ],
                    },
                    {
                        title: "title",
                        links: [
                            { url: "/", label: "Home" },
                            { url: "/", label: "About Us" },
                            { url: "/", label: "Our Beliefs" },
                            { url: "/", label: "Articles" },
                        ],
                    },
                    {
                        title: "title",
                        links: [
                            { url: "/", label: "Home" },
                            { url: "/", label: "About Us" },
                            { url: "/", label: "Our Beliefs" },
                            { url: "/", label: "Articles" },
                        ],
                    },
                ],
            },
        },
        pageData: {
            seo: {
                metaTitle: "Test",
                metaDescription: "Test default layout story",
                metaTags: [],
                preventIndexing: false,
                structuredData: {},
                metaImage: {
                    src: "./bible_logo.svg",
                },
            },
            blocks: [],
            // Uncomment and configure these as needed
            // headerData: {
            //     title: "Tawa Christadelphians",
            //     subtitle:
            //         "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
            //     textPosition: "topcenter",
            //     image: "bible_photo.jpg",
            //     imageBlurDataURL: "bible_photo.jpg",
            //     alt: "alt text",
            //     textColor: "white",
            // },
            // eventData: {
            //     title: "coming up",
            //     filter: "all",
            //     events: [
            //         {
            //             title: "Past Event Title",
            //             presenter: "Event Presenter",
            //             datetime: new Date("2020-12-09T04:48:09.745Z"),
            //             description: "come to this event!",
            //             location: "Tawa Christadelphian Ecclesia",
            //             url: "/",
            //         },
            //         {
            //             title: "Event Today",
            //             presenter: "Event Presenter",
            //             datetime: new Date(),
            //             description: "come to this event!",
            //             location: "Tawa Christadelphian Ecclesia",
            //             url: "/",
            //         },
            //         {
            //             title: "Future Event",
            //             presenter: "Event Presenter",
            //             datetime: new Date("2100-12-09T04:48:09.745Z"),
            //             description: "come to this event!",
            //             location: "Tawa Christadelphian Ecclesia",
            //             url: "/",
            //         },
            //     ],
            // },
        },
    },
};
