import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventList from "./EventList";

export default {
    title: "Elements/Event List",
    component: EventList,
} as ComponentMeta<typeof EventList>;

const Template: ComponentStory<typeof EventList> = (args) => (
    <EventList {...args}>{args.children}</EventList>
);

export const Default = Template.bind({});

Default.args = {
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
};

Default.argTypes = {
    filter: {
        options: ["past", "future", "all"],
        control: { type: "select" },
    },
};

export const NoEvents = Template.bind({});

NoEvents.args = {
    title: "Coming Up",
    noEventsPlaceholder:
        "We're still planning next year. Check again in a few days!",
    filter: "all",
    events: [],
};
