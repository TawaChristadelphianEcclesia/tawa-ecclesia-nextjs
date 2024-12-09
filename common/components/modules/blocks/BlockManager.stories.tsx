import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BlockManager from "./BlockManager";

const meta: Meta<typeof BlockManager> = {
    title: "Modules/Blocks/BlockManager",
    component: BlockManager,
};
export default meta;

type Story = StoryObj<typeof BlockManager>;

export const Default: Story = {
    args: {
        // List of blocks to render
        blocks: [
            {
                component: "hero", // The type of block, e.g., "hero"
                data: {
                    image: {
                        src: "bible_photo.jpg", // Image source for the hero block
                        blurDataURL: "bible_photo.jpg", // Placeholder image for lazy loading
                    },
                    title: "Tawa Christadelphians", // Title for the hero block
                    subtitle:
                        "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.", // Subtitle for the hero block
                },
            },
        ],
    },
};
