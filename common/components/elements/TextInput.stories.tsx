import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

export default {
    title: "Elements/Text Input",
    component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
    <TextInput {...args}>{args.children}</TextInput>
);

export const Default = Template.bind({});

Default.args = {
    type: "text",
    placeholder: "Your Name",
};

export const Email = Template.bind({});
Email.args = {
    type: "email",
    placeholder: "Your Email",
};
