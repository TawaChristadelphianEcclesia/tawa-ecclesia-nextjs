/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import dayjs from "dayjs";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import ReactMarkdown from "react-markdown";
// import EventContent from "../elements/EventContent";
import StandardHeader from "../elements/StandardHeader";
import BlockManager, { IBlock } from "../modules/blocks/BlockManager";
import Card from "../elements/Card";
import CalendarIcon from "../assets/calendar.svg";
import LocationIcon from "../assets/location.svg";
import DetailsIcon from "../assets/details.svg";
import ContentSection from "../elements/ContentSection";

export interface IEventPage {
    globalData: IGlobalData;
    pageData:  IPageData & {
        title: string;
        datetime: Date;
        // presenter: string;
        // location: string;
        description: string;
        // image: IImageData;
    };
}

const EventPage: React.FC<IEventPage> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <ContentSection padTop padBottom>
            <div
                // tw="bg-white rounded-2xl border-gray-100 border shadow-xl px-5 py-5"
                tw="bg-white rounded-2xl border-gray-100 border shadow-xl overflow-hidden"
                // css={[animate && tw`transform transition duration-300 hover:scale-105`]}
            >
                <div
                    tw="aspect-w-16 aspect-h-9"
                    style={{
                        position: "relative",
                    }}
                >
                    <Image
                        src="/bible_photo.jpg"
                        alt="event image"
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/bible_photo.jpg"
                    />
                </div>
                <div tw="p-5 space-y-4">
                    <div tw="flex">
                        <div tw="mr-4">
                            <CalendarIcon tw="h-5 w-5 text-gray-700 mt-1" />
                        </div>
                        <div>
                            <h2>Date and Time</h2>
                            <p>
                                {dayjs(pageData.datetime).format(
                                    "ddd, D MMMM YYYY"
                                )}
                            </p>
                            <p>{dayjs(pageData.datetime).format("h:mm A")}</p>
                            {/* <p>Tues, 29 March 2022</p> */}
                            {/* <p>7:30PM - 8:30PM</p> */}
                        </div>
                    </div>
                    <div tw="flex">
                        <div tw="mr-4">
                            <LocationIcon tw="h-5 w-5 text-gray-700 mt-1" />
                        </div>
                        <div>
                            <h2>Location</h2>
                            <p>Tawa Christadelphian Ecclesia</p>
                            <p>Cnr Linden Ave & Main Road</p>
                            <p>2 Linden Avenue Tawa, Wellington 5028</p>
                            <p>
                                <a href="#">View Map</a>
                            </p>
                        </div>
                    </div>
                    <div tw="flex">
                        <div tw="mr-4">
                            <DetailsIcon tw="h-5 w-5 text-gray-700 mt-1" />
                        </div>
                        <div>{pageData.description}</div>
                    </div>
                    <div tw="flex">
                        <div>Register</div>
                    </div>
                </div>
            </div>
        </ContentSection>
        {/* <StandardHeader
            title={pageData.title}
            summary={pageData.summary}
            image={pageData.image}
        /> */}
        {/* <EventContent content={pageData.content} /> */}
    </DefaultLayout>
);

export default EventPage;
