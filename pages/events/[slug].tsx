import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
// import { getAllEventSlugs, getEventData } from "../../common/utils/EventData";
import Event, { IEventData } from "../../common/components/templates/Event";
import {
    getAllEventSlugs,
    getEventPageData,
} from "../../common/utils/EventData";

const EventPage: React.FC<IEventData> = ({ pageData, globalData }) => {
    return <Event pageData={pageData} globalData={globalData} />;
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllEventSlugs();
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IEventData> = async ({
    params,
}) => {
    const data = await getEventPageData(params!.slug as string);
    return {
        props: data,
    };
};
