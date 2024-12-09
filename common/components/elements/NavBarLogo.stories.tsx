import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import NavBarLogo from "./NavBarLogo";

const meta: Meta<typeof NavBarLogo> = {
    title: "Elements/Nav Bar Logo",
    component: NavBarLogo,
    argTypes: { setOpen: { action: "clicked" } },
};
export default meta;

type Story = StoryObj<typeof NavBarLogo>;

export const Default: Story = {
    args: {
        logo: {
            src: "./bible_logo.svg",
            alt: "bible logo",
        },
    },
};
