import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ConditionalLinkWrapper from "./ConditionalLinkWrapper";

const meta: Meta<typeof ConditionalLinkWrapper> = {
    title: "Elements/Conditional Link Wrapper",
    component: ConditionalLinkWrapper,
};
export default meta;

type Story = StoryObj<typeof ConditionalLinkWrapper>;

export const Default: Story = {
    args: {
        href: "/",
    },
};

export const NoHref: Story = {
    args: {},
};
