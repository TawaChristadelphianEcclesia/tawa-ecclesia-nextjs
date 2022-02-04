import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import VideoHighlightBlock from "./VideoHighlightBlock";

export default {
    title: "Modules/Blocks/Video Highlight Block",
    component: VideoHighlightBlock,
} as ComponentMeta<typeof VideoHighlightBlock>;

const Template: ComponentStory<typeof VideoHighlightBlock> = (args) => (
    <VideoHighlightBlock {...args}></VideoHighlightBlock>
);

export const Default = Template.bind({});

Default.args = {
    url: "https://www.youtube.com/watch?time_continue=1&v=vDJzR6TIu9M",
    image: {
        alt: "test",
        url: "undraw_podcast.svg",
        blurDataUrl: "undraw_podcast.svg"
    },
    title: "Test Title",
    subtitle: "Test Subtitle",
    body: "Test Body"
};
// src,
// alt,
// blurDataUrl,
// title,
// subtitle,
// body,
// leftLink,
// rightLink,
