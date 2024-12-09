import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
    title: "Elements/Text Input",
    component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: "Message",
    },
};
