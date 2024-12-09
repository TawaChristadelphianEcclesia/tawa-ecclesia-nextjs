import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HamburgerButton from "./HamburgerButton";

const meta: Meta<typeof HamburgerButton> = {
    title: "Elements/Hamburger Button",
    component: HamburgerButton,
    argTypes: { setOpen: { action: "clicked" } },
};
export default meta;

type Story = StoryObj<typeof HamburgerButton>;

export const Open: Story = {
    args: {
        open: true,
    },
};

export const Closed: Story = {
    args: {
        open: false,
    },
};
