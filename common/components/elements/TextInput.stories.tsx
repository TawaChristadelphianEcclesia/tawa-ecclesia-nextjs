import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
    title: "Elements/Text Input",
    component: TextInput,
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        type: "text",
        placeholder: "Your Name",
    },
};

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "Your Email",
    },
};
