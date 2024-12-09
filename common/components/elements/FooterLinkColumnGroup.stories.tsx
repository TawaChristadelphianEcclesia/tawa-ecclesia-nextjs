import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FooterLinkColumnGroup from "./FooterLinkColumnGroup";

const meta: Meta<typeof FooterLinkColumnGroup> = {
    title: "Elements/Footer Column Group",
    component: FooterLinkColumnGroup,
};
export default meta;

type Story = StoryObj<typeof FooterLinkColumnGroup>;

export const Default: Story = {
    args: {
        footerColumns: [
            {
                title: "title",
                links: [
                    { url: "/", label: "Home" },
                    { url: "/", label: "About Us" },
                    { url: "/", label: "Our Beliefs" },
                    { url: "/", label: "Articles" },
                ],
            },
            {
                title: "title",
                links: [
                    { url: "/", label: "Home" },
                    { url: "/", label: "About Us" },
                    { url: "/", label: "Our Beliefs" },
                    { url: "/", label: "Articles" },
                ],
            },
            {
                title: "title",
                links: [
                    { url: "/", label: "Home" },
                    { url: "/", label: "About Us" },
                    { url: "/", label: "Our Beliefs" },
                    { url: "/", label: "Articles" },
                ],
            },
        ],
    },
};
