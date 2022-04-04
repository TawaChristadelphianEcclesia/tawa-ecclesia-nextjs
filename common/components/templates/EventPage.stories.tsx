import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventPage from "./EventPage";

export default {
    title: "Templates/Event",
    component: EventPage,
} as ComponentMeta<typeof EventPage>;

const Template: ComponentStory<typeof EventPage> = (args) => (
    <EventPage {...args}>{args.children}</EventPage>
);

export const Default = Template.bind({});

Default.args = {
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
        title: "test",
        datetime: new Date(),
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quod officia dolorum magni nulla sunt enim labore voluptates accusantium, alias neque ducimus fugiat molestias corporis incidunt. Ipsum, vero. Vero, sed?",
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
    },
};
