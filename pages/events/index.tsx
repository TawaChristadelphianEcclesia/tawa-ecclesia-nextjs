import React from "react";
import { GetStaticProps } from "next";
import EventsPage, {
    IEventsPage,
} from "../../common/components/templates/EventsPage";
import { getEventHomePageData } from "../../common/utils/EventData";

const Page: React.FC<IEventsPage> = (props) => <EventsPage {...props} />;

export default Page;

export const getStaticProps: GetStaticProps<IEventsPage> = async () => ({
    props: await getEventHomePageData(),
});
