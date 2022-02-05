import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import VideosPage from "./VideosPage";

import * as Footer from "../modules/Footer.stories";
import * as Header from "../modules/HeaderNavBar.stories";
import { IHeaderData } from "../modules/HeaderNavBar";
import { IFooterData } from "../modules/Footer";
import * as HomePage from "./HomePage.stories";
import { ISeoData } from "../elements/Seo";

export default {
    title: "Templates/Videos Page",
    component: VideosPage,
} as ComponentMeta<typeof VideosPage>;

const Template: ComponentStory<typeof VideosPage> = (args) => (
    <VideosPage {...args} />
);

export const Default = Template.bind({});

const templateVideo = {
    image: {
        src: "bible_photo.jpg",
        alt: "bible photo",
        blurDataURL: "bible_photo.jpg",
    },
    title: "As they Annex Ukraine......What does the Bible says about Russia!",
    subtitle: "Lorem ipsum dolor sit amet consectetur.",
    description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium vero commodi omnis magnam voluptas vel modi accusamus saepe consectetur ratione quidem, enim quaerat, atque dolorem ut assumenda ae odio sint voluptatum debitis. Amet autem recusandae temporibus a, nemo praesentium quia necessitatibus aut, magni perferendis consequuntur placeat nesciunt maxime.",
    tags: ["test tag 1", "test tag 2"],
};

const videos = Array.from({ length: 8 }, (_, i) => ({ ...templateVideo }));

Default.args = {
    globalData: {
        headerData: Header.Default.args as IHeaderData,
        footerData: Footer.Default.args as IFooterData,
    },
    pageData: {
        seo: HomePage.Default.args?.pageData?.seo as ISeoData,
        headerData: {
            title: "Watch",
            subtitle: "Watch these videos",
        },
        videos,
    },
};
