/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import EventCard, { IEventCard } from "./EventCard";

export interface IEventList {
    title: string;
    noEventsPlaceholder?: string;
    filter: "future" | "past" | "all";
    // maxShown: number;
    events: IEventCard[];
}

const filterDates = (dateString: string, filter: IEventList["filter"]) => {
    if (filter == "future") {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const compareDate = new Date(dateString);
        return compareDate > yesterday;
    } else if (filter == "past") {
        const today = new Date();
        const compareDate = new Date(dateString);
        return compareDate < today;
    } else {
        return true;
    }
};

const sortDates = (dateA: Date, dateB: Date, sort: "asc" | "desc") => {
    if (sort == "asc") {
        return new Date(dateA).getTime() - new Date(dateB).getTime();
    } else {
        return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
};

const EventList: React.FC<IEventList> = ({
    title,
    noEventsPlaceholder,
    events,
    filter,
    // maxShown,
}) => (
    <>
        <div tw="m-4 mb-6">
            <h2 tw="text-gray-900 text-4xl">{title}</h2>
        </div>
        {!events.length && noEventsPlaceholder && (
            <div tw="mx-4">
                <p>{noEventsPlaceholder}</p>
            </div>
        )}
        {events
            .filter((event) => filterDates(event.datetime.toString(), filter))
            .sort((eventA, eventB) =>
                sortDates(
                    eventA.datetime,
                    eventB.datetime,
                    filter == "past" ? "desc" : "asc"
                )
            )
            .map((event, key) => (
                <EventCard key={key} {...event}></EventCard>
            ))}
    </>
);

export default EventList;
