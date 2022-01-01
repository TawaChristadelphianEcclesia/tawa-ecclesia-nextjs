import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextHeader from "./TextHeader";

export default {
    title: "Elements/Headers/Text Header",
    component: TextHeader,
} as ComponentMeta<typeof TextHeader>;

const Template: ComponentStory<typeof TextHeader> = (args) => (
    <TextHeader {...args}>{args.children}</TextHeader>
);

export const Default = Template.bind({});

Default.args = {};
