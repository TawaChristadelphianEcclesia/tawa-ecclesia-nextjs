import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageCard from "./ImageCard";
import Card from "./Card";

export default {
    title: "Elements/Image Card",
    component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
    <Card>
        <ImageCard {...args}>{args.children}</ImageCard>
    </Card>
);

export const Default = Template.bind({});

Default.args = {
    src: "undraw_podcast.svg",
    alt: "postcast illustration",
};
