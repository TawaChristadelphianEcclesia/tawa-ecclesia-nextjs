import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ContentSection from "./ContentSection";
import Card from "./Card";

const meta: Meta<typeof ContentSection> = {
    title: "Elements/Content Section",
    component: ContentSection,
};
export default meta;

type Story = StoryObj<typeof ContentSection>;

export const Default: Story = {
    args: {
        children: <Card>child card</Card>,
    },
};
