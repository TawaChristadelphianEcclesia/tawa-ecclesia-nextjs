import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "./TextArea";

export default {
    title: "Elements/Text Input",
    component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
    <TextArea {...args}>{args.children}</TextArea>
);

export const Default = Template.bind({});

Default.args = {
    placeholder: "Message",
};
