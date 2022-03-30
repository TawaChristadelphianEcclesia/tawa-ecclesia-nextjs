import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
// import { getAllEventSlugs, getEventData } from "../../common/utils/EventData";
import Event, { IEventData } from "../../common/components/templates/Event";

const EventPage: React.FC<IEventData> = ({ pageData, globalData }) => {
    return <Event pageData={pageData} globalData={globalData} />;
};

export default EventPage;

export const getStaticPaths: GetStaticPaths = async () => {
    // const paths = await getAllEventSlugs();
    const paths = [
        {
            params: {
                slug: "test",
            },
        },
    ];
    return { paths, fallback: false };
};

// export const getStaticProps: GetStaticProps<IEventData> = async ({
export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
    // const data = await getEventData(params!.slug as string);
    const data = undefined;
    return {
        props: data,
    };
};
