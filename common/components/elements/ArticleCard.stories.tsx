import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleCard from "./ArticleCard";

export default {
    title: "Elements/Article Card",
    component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = (args) => (
    <ArticleCard {...args}>{args.children}</ArticleCard>
);

export const Default = Template.bind({});

Default.args = {
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
};

// url: string;
// title: string;
// titleImage: IImageData;
// summary: string;
// tags: string[];
// datePublished: Date;
// readingTime: number;
