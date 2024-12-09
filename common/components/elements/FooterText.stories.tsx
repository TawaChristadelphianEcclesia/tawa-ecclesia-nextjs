import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FooterText from "./FooterText";

const meta: Meta<typeof FooterText> = {
    title: "Elements/Footer Text Section",
    component: FooterText,
};
export default meta;

type Story = StoryObj<typeof FooterText>;

export const Default: Story = {
    args: {
        text: "Footer Text",
        icon: {
            src: "./bible_logo.svg",
            alt: "bible logo",
        },
    },
};
