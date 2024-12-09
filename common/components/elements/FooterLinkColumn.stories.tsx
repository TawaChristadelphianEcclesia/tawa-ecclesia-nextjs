import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FooterLinkColumn from "./FooterLinkColumn";

const meta: Meta<typeof FooterLinkColumn> = {
    title: "Elements/Footer Link Column",
    component: FooterLinkColumn,
};
export default meta;

type Story = StoryObj<typeof FooterLinkColumn>;

export const Default: Story = {
    args: {
        title: "title",
        links: [
            { url: "/", label: "Home" },
            { url: "/", label: "About Us" },
            { url: "/", label: "Our Beliefs" },
            { url: "/", label: "Articles" },
        ],
    },
};
