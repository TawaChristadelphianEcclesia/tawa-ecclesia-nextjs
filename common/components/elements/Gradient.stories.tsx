import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gradient from "./Gradient";
import Card from "./Card";

export default {
    title: "Elements/Gradient",
    component: Gradient,
} as ComponentMeta<typeof Gradient>;

const Template: ComponentStory<typeof Gradient> = (args) => (
    <Gradient {...args}>
        {args.children}
    </Gradient>
);

export const Default = Template.bind({});

Default.args = { children: <Card>child card</Card> };
