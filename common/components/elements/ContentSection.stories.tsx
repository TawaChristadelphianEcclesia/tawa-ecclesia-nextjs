import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentSection from "./ContentSection";
import Card from "./Card";

export default {
    title: "Elements/Content Section",
    component: ContentSection,
} as ComponentMeta<typeof ContentSection>;

const Template: ComponentStory<typeof ContentSection> = (args) => (
    <ContentSection {...args}>
        {args.children}
    </ContentSection>
);

export const Default = Template.bind({});

Default.args = { children: <Card>child card</Card> };
