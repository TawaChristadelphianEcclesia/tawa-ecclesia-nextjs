import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EventCard from "./EventCard";

const meta: Meta<typeof EventCard> = {
    title: "Elements/Event Card",
    component: EventCard,
};
export default meta;

type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
    args: {
        title: "Event Title",
        presenter: "Event Presenter",
        datetime: new Date(),
        description: "come to this event!",
        location: "Tawa Christadelphian Ecclesia",
        url: "/",
    },
};
