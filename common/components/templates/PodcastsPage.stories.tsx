import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PodcastsPage, { IPodcastsPage } from "./PodcastsPage";

import * as Footer from "../modules/Footer.stories";
import * as Header from "../modules/HeaderNavBar.stories";
import { IHeaderData } from "../modules/HeaderNavBar";
import { IFooterData } from "../modules/Footer";
import * as HomePage from "./HomePage.stories";
import { ISeoData } from "../elements/Seo";

export default {
    title: "Templates/Podcasts Page",
    component: PodcastsPage,
} as ComponentMeta<typeof PodcastsPage>;

const Template: ComponentStory<typeof PodcastsPage> = (args) => (
    <PodcastsPage {...args} />
);

export const Default = Template.bind({});

const templatePodcast: IPodcastsPage["pageData"]["podcasts"][0] = {
    image: {
        src: "/bible_photo.jpg",
        alt: "bible photo",
        blurDataURL: "bible_photo.jpg",
    },
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos quis architecto nobis, cumque quia recusandae voluptate ipsa eveniet voluptates aperiam laudantium necessitatibus, magnam ab dolorum, quisquam magni amet doloribus. ",
    date: new Date(),
    fileUrl: "/short_music_podcast_placeholder.mp3",
};

export const podcasts = Array.from({ length: 8 }, (_, i) => ({
    ...templatePodcast,
}));

Default.args = {
    globalData: {
        headerData: Header.Default.args as IHeaderData,
        footerData: Footer.Default.args as IFooterData,
    },
    pageData: {
        seo: HomePage.Default.args?.pageData?.seo as ISeoData,
        headerData: {
            title: "Listen",
            subtitle: "Listen these podcasts",
        },
        podcasts,
    },
};
<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
>
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
    />
</svg>;
