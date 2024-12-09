import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DummyComponent from "./DummyComponent";

const meta: Meta<typeof DummyComponent> = {
  title: "Example/Dummy Component",
  component: DummyComponent,
};
export default meta;

type Story = StoryObj<typeof DummyComponent>;

export const Default: Story = {
  args: {},
};
