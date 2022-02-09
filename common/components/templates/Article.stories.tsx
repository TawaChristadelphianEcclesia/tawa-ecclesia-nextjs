import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Article from "./Article";

export default {
    title: "Templates/Article",
    component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
    <Article {...args}>{args.children}</Article>
);

export const Default = Template.bind({});

Default.args = {};
