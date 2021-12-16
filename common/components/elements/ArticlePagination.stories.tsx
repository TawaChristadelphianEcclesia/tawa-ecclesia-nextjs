import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticlePagination from "./ArticlePagination";

export default {
    title: "Elements/Article Pagination",
    component: ArticlePagination,
} as ComponentMeta<typeof ArticlePagination>;

const Template: ComponentStory<typeof ArticlePagination> = (args) => (
    <ArticlePagination {...args}>{args.children}</ArticlePagination>
);

export const Default = Template.bind({});

Default.args = {};
