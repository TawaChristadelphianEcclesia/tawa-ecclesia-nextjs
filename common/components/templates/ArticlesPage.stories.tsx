import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";

export default {
    title: "Templates/Articles Page",
    component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args}>{args.children}</ArticlesPage>
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
        headerData: {
            title: "Articles",
            subtitle: "Subtitle",
        },
        articleData: [
            {
                url: "/",
                title: "God's Purpose and Character",
                titleImage: {
                    src: "bible_photo.jpg",
                    alt: "bible photo",
                    blurDataURL: "bible_photo.jpg",
                },
                summary: "Who is God, and what is His purpose with the earth?",
                tags: [],
                datePublished: new Date(),
                readingTime: 1,
            },
            {
                url: "/",
                title: "God's Purpose and Character",
                titleImage: {
                    src: "bible_photo.jpg",
                    alt: "bible photo",
                    blurDataURL: "bible_photo.jpg",
                },
                summary: "Who is God, and what is His purpose with the earth?",
                tags: [],
                datePublished: new Date(),
                readingTime: 1,
            },
            {
                url: "/",
                title: "God's Purpose and Character",
                titleImage: {
                    src: "bible_photo.jpg",
                    alt: "bible photo",
                    blurDataURL: "bible_photo.jpg",
                },
                summary: "Who is God, and what is His purpose with the earth?",
                tags: [],
                datePublished: new Date(),
                readingTime: 1,
            },
        ],
    },
};
