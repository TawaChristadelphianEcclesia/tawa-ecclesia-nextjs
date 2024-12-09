import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextHeader from "./TextHeader";

const meta: Meta<typeof TextHeader> = {
    title: "Elements/Headers/Text Header",
    component: TextHeader,
};
export default meta;

type Story = StoryObj<typeof TextHeader>;

export const Default: Story = {
    args: {},
};
