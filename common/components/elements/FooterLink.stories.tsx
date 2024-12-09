import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FooterLink from "./FooterLink";

const meta: Meta<typeof FooterLink> = {
    title: "Elements/Footer Link",
    component: FooterLink,
};
export default meta;

type Story = StoryObj<typeof FooterLink>;

export const Default: Story = {
    args: {
        label: "link",
        url: "link",
    },
};
