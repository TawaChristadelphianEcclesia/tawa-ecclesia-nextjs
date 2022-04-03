import {
    getEventsData as getAPIEventsData,
    getEventData as getAPIEventData,
    getEventSlugs,
} from "../api/eventQueries";
import { IEventCard } from "../components/elements/EventCard";
import { IEventList } from "../components/elements/EventList";
import { IEventData } from "../components/templates/Event";
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

export const getEventPageData = async (slug: string): Promise<IEventData> => {
    const pageAPIData = await (await getAPIEventData(slug))?.attributes;
    // const seo = getSeoData(pageAPIData?.seo);
    const seo = getSeoData(undefined);
    const pageData: IEventData["pageData"] = {
        seo,
        title: pageAPIData?.title || "no title",
        datetime: new Date(pageAPIData?.time as string),
        description: pageAPIData?.description || "no description",
    };
    const globalData = await getGlobalData();
    return { pageData, globalData };
};
