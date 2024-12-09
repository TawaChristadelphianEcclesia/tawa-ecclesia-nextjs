import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import PodcastsPage, { IPodcastsPage } from "./PodcastsPage";

import * as Footer from "../modules/Footer.stories";
import * as Header from "../modules/HeaderNavBar.stories";
import { IHeaderData } from "../modules/HeaderNavBar";
import { IFooterData } from "../modules/Footer";
import * as HomePage from "./HomePage.stories";
import { ISeoData } from "../elements/Seo";

const meta: Meta<typeof PodcastsPage> = {
    title: "Templates/Podcasts Page",
    component: PodcastsPage,
};
export default meta;

type Story = StoryObj<typeof PodcastsPage>;

const templatePodcast: IPodcastsPage["pageData"]["podcasts"][0] = {
    image: {
        src: "/bible_photo.jpg",
        alt: "bible photo",
        blurDataURL: "bible_photo.jpg",
    },
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quos quis architecto nobis, cumque quia recusandae voluptate ipsa eveniet voluptates aperiam laudantium necessitatibus, magnam ab dolorum, quisquam magni amet doloribus.",
    date: new Date(),
    fileUrl: "/short_music_podcast_placeholder.mp3",
    duration: 65,
};

const podcasts = Array.from({ length: 8 }, () => ({
    ...templatePodcast,
}));

export const Default: Story = {
    args: {
        globalData: {
            headerData: Header.Default.args as IHeaderData,
            footerData: Footer.Default.args as IFooterData,
        },
        pageData: {
            seo: HomePage.Default.args?.pageData?.seo as ISeoData,
            headerData: {
                title: "Listen",
                subtitle: "Listen to these podcasts",
            },
            podcasts,
        },
    },
};
