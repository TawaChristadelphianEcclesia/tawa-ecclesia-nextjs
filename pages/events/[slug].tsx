import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import EventPage, { IEventPage } from "../../common/components/templates/EventPage";
import {
    getAllEventSlugs,
    getEventPageData,
} from "../../common/utils/EventData";

const Page: React.FC<IEventPage> = ({ pageData, globalData }) => {
    return <EventPage pageData={pageData} globalData={globalData} />;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllEventSlugs();
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IEventPage> = async ({
    params,
}) => {
    const data = await getEventPageData(params!.slug as string);
    return {
        props: data,
    };
};
