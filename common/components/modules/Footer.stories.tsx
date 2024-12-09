import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
    title: "Modules/Footer",
    component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        footerText: "Footer Text",
        footerIcon: {
            src: "./bible_logo.svg",
            alt: "bible logo",
        },
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
