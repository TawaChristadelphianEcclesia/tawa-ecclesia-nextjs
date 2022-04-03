import React from "react";
import { GetStaticProps } from "next";
// import EventsPageTemplate, {
//     IEventsPage,
// } from "../../common/components/templates/EventsPage";
// import { getEventHomePageData } from "../../common/utils/EventData";

// const EventsPage: React.FC<IEventsPage> = (templateData) => (
//     <EventsPageTemplate {...templateData} />
// );

const EventsPage: React.FC = () => <div>events home page</div>;

export default EventsPage;

// export const getStaticProps: GetStaticProps<IEventsPage> = async () => ({
//     props: await getEventHomePageData(),
// });
