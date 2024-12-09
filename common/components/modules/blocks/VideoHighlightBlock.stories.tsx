import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import VideoHighlightBlock from "./VideoHighlightBlock";

const meta: Meta<typeof VideoHighlightBlock> = {
    title: "Modules/Blocks/Video Highlight Block",
    component: VideoHighlightBlock,
};
export default meta;

type Story = StoryObj<typeof VideoHighlightBlock>;

export const Default: Story = {
    args: {
        // URL of the video highlight
        // url: "https://www.youtube.com/watch?time_continue=1&v=vDJzR6TIu9M",
        image: {
            alt: "test", // Alt text for the image
            src: "undraw_podcast.svg", // Image source
            blurDataURL: "undraw_podcast.svg", // Placeholder image for lazy loading
        },
        title: "Test Title", // Main title of the block
        subtitle: "Test Subtitle", // Subtitle of the block
        body: "Test Body", // Body text of the block
        highlightVideo: {
            url: "https://www.youtube.com/watch?time_continue=1&v=vDJzR6TIu9M", // Video URL
            title: "test", // Video title
            description: "test", // Video description
        },
    },
};

// Placeholder for additional props:
// src,
// alt,
// blurDataURL,
// title,
// subtitle,
// body,
// leftLink,
// rightLink,
