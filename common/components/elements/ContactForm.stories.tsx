import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContactForm from "./ContactForm";
import Card from "./Card";

export default {
    title: "Elements/Contact Form",
    component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
    <Card>
        <ContactForm {...args}>{args.children}</ContactForm>
    </Card>
);

export const Default = Template.bind({});

Default.args = {};
