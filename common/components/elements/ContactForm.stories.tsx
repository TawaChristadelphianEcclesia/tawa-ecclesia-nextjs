import React, { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ContactForm from "./ContactForm";
import Card from "./Card";

const meta: Meta<typeof ContactForm> = {
    title: "Elements/Contact Form",
    component: ContactForm,
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
    render: (args: ComponentProps<typeof ContactForm>) => (
        <Card>
            <ContactForm {...args}>{args.children}</ContactForm>
        </Card>
    ),
    args: {},
};
