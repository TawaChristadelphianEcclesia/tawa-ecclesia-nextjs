import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";

const meta: Meta<typeof Article> = {
    title: "Templates/Article",
    component: Article,
};
export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {
    args: {},
};
