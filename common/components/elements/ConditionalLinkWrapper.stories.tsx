import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConditionalLinkWrapper from "./ConditionalLinkWrapper";

export default {
    title: "Elements/Conditional Link Wrapper",
    component: ConditionalLinkWrapper,
} as ComponentMeta<typeof ConditionalLinkWrapper>;

const Template: ComponentStory<typeof ConditionalLinkWrapper> = (args) => (
    <ConditionalLinkWrapper {...args}>{args.children}</ConditionalLinkWrapper>
);

export const Default = Template.bind({});

Default.args = {
    href: "/",
};

export const NoHref = Template.bind({});

NoHref.args = {};
