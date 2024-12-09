import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ArticleList from "./ArticleList";

const meta: Meta<typeof ArticleList> = {
    title: "Elements/Article List",
    component: ArticleList,
};
export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
    args: {
        articles: [
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
