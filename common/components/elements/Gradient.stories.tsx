import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Gradient from "./Gradient";
import Card from "./Card";

const meta: Meta<typeof Gradient> = {
    title: "Elements/Gradient",
    component: Gradient,
};
export default meta;

type Story = StoryObj<typeof Gradient>;

export const Default: Story = {
    render: (args: ComponentProps<typeof Card>) => (
        <Gradient {...args}>
            <Card>child card</Card>
        </Gradient>
    ),
};
