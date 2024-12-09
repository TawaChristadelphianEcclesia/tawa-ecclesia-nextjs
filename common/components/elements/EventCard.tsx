/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

export interface IEventCard {
    title: string;
    presenter: string;
    location: string;
    datetime: Date;
    description: string;
    url?: string;
}

const EventCardContents: React.FC<IEventCard> = ({
    title,
    presenter,
    datetime,
    location,
    description,
}) => {
    return (
        <div tw="flex py-2 border-b">
            <div tw="text-center px-4 font-medium tracking-wider">
                <p tw="text-3xl leading-none">
                    {datetime.getDate().toString().padStart(2, "0")}
                </p>
                <p tw="text-xl leading-none">
                    {datetime.toLocaleString("default", {
                        month: "short",
                    })}
                </p>
            </div>
            <div>
                <h3 tw="text-gray-900 font-sans text-xl font-bold">{title}</h3>
                <p tw="text-gray-600 font-sans text-sm">
                    <b>
                        {datetime.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                    </b>{" "}
                    | {location} • {presenter}
                </p>
                <p tw="text-gray-900 font-sans text-sm">{description}</p>
            </div>
        </div>
    );
};

const EventCard: React.FC<IEventCard> = (eventData) => {
    return eventData.url ? (
        <Link href={eventData.url} passHref legacyBehavior>
            <a>
                <EventCardContents {...eventData} />
            </a>
        </Link>
    ) : (
        <EventCardContents {...eventData} />
    );
};

export default EventCard;
