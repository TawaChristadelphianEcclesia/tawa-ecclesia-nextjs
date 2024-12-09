import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

const meta: Meta<typeof Page> = {
    title: "Example/Page",
    component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const LoggedIn: Story = {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
    args: {
        ...HeaderStories.LoggedIn.args,
    },
};

export const LoggedOut: Story = {
    args: {
        ...HeaderStories.LoggedOut.args,
    },
};
