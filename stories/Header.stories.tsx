import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
    title: "Example/Header",
    component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
    args: {
        user: {},
    },
};

export const LoggedOut: Story = {
    args: {},
};
