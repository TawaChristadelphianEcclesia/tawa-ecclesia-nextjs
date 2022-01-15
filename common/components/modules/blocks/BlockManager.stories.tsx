import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BlockManager from "./BlockManager";

export default {
    title: "Modules/Blocks/BlockManager",
    component: BlockManager,
} as ComponentMeta<typeof BlockManager>;

const Template: ComponentStory<typeof BlockManager> = (args) => (
    <BlockManager {...args}>{args.children}</BlockManager>
);

export const Default = Template.bind({});

Default.args = {
    blocks: [
        {
            component: "hero",
            data: {
                image: "bible_photo.jpg",
                imageBlurDataURL: "bible_photo.jpg",
                title: "Tawa Christadelphians",
                subtitle:
                    "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
            },
        },
    ],
};
