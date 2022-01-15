import { getEventsData as getAPIEventData } from "../api/eventQueries";
import { IEventCard } from "../components/elements/EventCard";
import { IEventList } from "../components/elements/EventList";

export const getEventsData = async (): Promise<IEventCard[]> => {
    const eventData = await getAPIEventData();
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
