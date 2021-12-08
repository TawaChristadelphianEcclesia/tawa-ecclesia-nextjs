import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "./HomePage";

export default {
    title: "Templates/Home Page",
    component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
    <HomePage {...args}>{args.children}</HomePage>
);

export const Default = Template.bind({});

Default.args = {
    globalData: {
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
                url: "./bible_logo.svg",
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
                url: "./bible_logo.svg",
            },
        },
        headerData: {
            title: "Tawa Christadelphians",
            subtitle:
                "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
            image: "bible_photo.jpg",
            imageBlurDataURL: "bible_photo.jpg",
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
                    datetime: new Date("2020-12-09T04:48:09.745Z"),
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
                {
                    title: "Event Today",
                    presenter: "Event Presenter",
                    datetime: new Date(),
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
                {
                    title: "Future Event",
                    presenter: "Event Presenter",
                    datetime: new Date("2100-12-09T04:48:09.745Z"),
                    description: "come to this event!",
                    location: "Tawa Christadelphian Ecclesia",
                    url: "/",
                },
            ],
        },
    },
};
