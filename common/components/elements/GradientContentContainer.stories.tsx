import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GradientContentContainer from "./GradientContentContainer";
import Card from "./Card";

export default {
    title: "Elements/Gradient Content Container",
    component: GradientContentContainer,
} as ComponentMeta<typeof GradientContentContainer>;

const Template: ComponentStory<typeof GradientContentContainer> = (args) => (
    <GradientContentContainer {...args}>
        {args.children}
    </GradientContentContainer>
);

export const Default = Template.bind({});

Default.args = { children: <Card>child card</Card> };
