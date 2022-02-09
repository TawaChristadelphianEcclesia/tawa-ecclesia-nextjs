import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EventCard from "./EventCard";

export default {
    title: "Elements/Event Card",
    component: EventCard,
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => (
    <EventCard {...args}>{args.children}</EventCard>
);

export const Default = Template.bind({});

Default.args = {
    title: "Event Title",
    presenter: "Event Presenter",
    datetime: new Date(),
    description: "come to this event!",
    location: "Tawa Christadelphian Ecclesia",
    url: "/",
};
