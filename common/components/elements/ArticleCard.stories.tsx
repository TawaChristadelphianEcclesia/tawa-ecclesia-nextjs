import React from "react";
import type { StoryFn, Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
    title: "Elements/Article Card",
    component: ArticleCard,
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
    args: {
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
};

// url: string;
// title: string;
// titleImage: IImageData;
// summary: string;
// tags: string[];
// datePublished: Date;
// readingTime: number;
