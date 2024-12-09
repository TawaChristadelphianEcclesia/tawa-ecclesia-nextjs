import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeaderNavBar from "./HeaderNavBar";

const meta: Meta<typeof HeaderNavBar> = {
    title: "Modules/HeaderNavBar",
    component: HeaderNavBar,
};
export default meta;

type Story = StoryObj<typeof HeaderNavBar>;

export const Default: Story = {
    args: {
        siteTitle: "Tawa Christadelphians",
        siteLogo: {
            src: "/bible_logo.svg",
            alt: "logo",
        },
        headerLinks: [
            {
                url: "/articles",
                label: "Articles",
            },
            {
                url: "/articles/who-are-we",
                label: "Who Are We?",
            },
            {
                url: "/articles/gods-purpose-with-the-earth",
                label: "Our Beliefs",
            },
        ],
    },
};
