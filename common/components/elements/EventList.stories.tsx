import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import EventList from "./EventList";

const meta: Meta<typeof EventList> = {
    title: "Elements/Event List",
    component: EventList,
    argTypes: {
        filter: {
            options: ["past", "future", "all"],
            control: { type: "select" },
        },
    },
};
export default meta;

type Story = StoryObj<typeof EventList>;

export const Default: Story = {
    args: {
        title: "Coming Up",
        filter: "all",
        events: [
            {
                title: "Past Event Title",
                presenter: "Event Presenter",
                datetime: new Date("2020-12-09T04:48:09.745Z"),
                description: "come to this event!",
                location: "Tawa Christadelphian Ecclesia",
                url: "/",
            },
            {
                title: "Event Today",
                presenter: "Event Presenter",
                datetime: new Date(),
                description: "come to this event!",
                location: "Tawa Christadelphian Ecclesia",
                url: "/",
            },
            {
                title: "Future Event",
                presenter: "Event Presenter",
                datetime: new Date("2100-12-09T04:48:09.745Z"),
                description: "come to this event!",
                location: "Tawa Christadelphian Ecclesia",
                url: "/",
            },
        ],
    },
};

export const NoEvents: Story = {
    args: {
        title: "Coming Up",
        noEventsPlaceholder:
            "We're still planning next year. Check again in a few days!",
        filter: "all",
        events: [],
    },
};
