import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DefaultLayout from "./DefaultLayout";

export default {
    title: "Layouts/Default Layout",
    component: DefaultLayout,
} as ComponentMeta<typeof DefaultLayout>;

const Template: ComponentStory<typeof DefaultLayout> = (args) => (
    <DefaultLayout {...args}>{args.children}</DefaultLayout>
);

export const Default = Template.bind({});
Default.args = {
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
    global: {
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
    children: "Page Content",
};
