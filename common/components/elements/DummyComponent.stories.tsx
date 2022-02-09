import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DummyComponent from "./DummyComponent";

export default {
    title: "Example/Dummy Component",
    component: DummyComponent,
} as ComponentMeta<typeof DummyComponent>;

const Template: ComponentStory<typeof DummyComponent> = (args) => (
    <DummyComponent {...args}>{args.children}</DummyComponent>
);

export const Default = Template.bind({});

Default.args = {};
