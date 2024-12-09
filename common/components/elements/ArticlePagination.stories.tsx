import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ArticlePagination from "./ArticlePagination";

const meta: Meta<typeof ArticlePagination> = {
    title: "Elements/Article Pagination",
    component: ArticlePagination,
};
export default meta;

type Story = StoryObj<typeof ArticlePagination>;

export const Default: Story = {
    args: {},
};
