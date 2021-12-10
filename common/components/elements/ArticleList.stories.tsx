import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleList from "./ArticleList";

export default {
    title: "Elements/Article List",
    component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args}>{args.children}</ArticleList>
);

export const Default = Template.bind({});

Default.args = {
    articles: [
        {
            url: "/",
            title: "God's Purpose and Character",
            titleImage: {
                url: "bible_photo.jpg",
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
                url: "bible_photo.jpg",
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
                url: "bible_photo.jpg",
                alt: "bible photo",
                blurDataURL: "bible_photo.jpg",
            },
            summary: "Who is God, and what is His purpose with the earth?",
            tags: [],
            datePublished: new Date(),
            readingTime: 1,
        },
    ],
};
