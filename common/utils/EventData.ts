import {
    getEventsData as getAPIEventsData,
    getEventData as getAPIEventData,
    getEventSlugs,
} from "../api/eventQueries";
import { IEventCard } from "../components/elements/EventCard";
import { IEventList } from "../components/elements/EventList";
import { IEventPage } from "../components/templates/EventPage";
import { IEventsPage } from "../components/templates/EventsPage";
import { getGlobalData } from "./GlobalData";
import { getSeoData } from "./SeoData";

export const getEventsData = async (): Promise<IEventCard[]> => {
    const eventData = await getAPIEventsData();
    return (
        eventData.events?.data.map((event) => ({
            title: event.attributes?.title || "",
            presenter: event.attributes?.presenter || "",
            location: event.attributes?.location || "",
            datetime: new Date(event.attributes?.time as string),
            description: event.attributes?.description || "",
        })) || []
    );
};
export const getAllEventSlugs = async () => {
    const data = await getEventSlugs();
    return data.events
        ? data.events?.data
              .filter((event) => event.attributes?.slug !== undefined)
              .map((event) => ({
                  params: {
                      slug: event.attributes?.slug,
                  },
              }))
        : [];
};

export const getEventPageData = async (slug: string): Promise<IEventPage> => {
    const pageAPIData = await (await getAPIEventData(slug))?.attributes;
    // const seo = getSeoData(pageAPIData?.seo);
    const seo = getSeoData(undefined);
    const pageData: IEventPage["pageData"] = {
        seo,
        title: pageAPIData?.title || "no title",
        datetime: new Date(pageAPIData?.time as string),
        description: pageAPIData?.description || "no description",
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};

export const getEventHomePageData = async (): Promise<IEventsPage> => {
    const pageAPIData = { title: "dummy title" };
    const seo = getSeoData(undefined);
    const pageData: IEventsPage["pageData"] = { seo, title: pageAPIData.title };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
