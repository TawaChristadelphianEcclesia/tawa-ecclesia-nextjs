import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

export default {
    title: "Elements/Card",
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args}>{args.children}</Card>
);

export const Default = Template.bind({});

Default.args = {
    children: "some content",
};
