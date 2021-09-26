import { Client } from "../prismic-config";
import Prismic from "@prismicio/client";
import { RichTextBlock } from "prismic-reactjs";

export interface IEventData {
  title: RichTextBlock[];
  presenter: RichTextBlock[];
  description: RichTextBlock[];
  time: string;
}

export type IAllEventsData = IEventData[];

export async function getAllEvents(): Promise<IAllEventsData> {
  const eventDocuments = await Client.query(
    Prismic.predicates.at("document.type", "event"),
    { pageSize: 100 }
  );
  const eventData = eventDocuments.results.map((result) => {
    return {
      title: result.data.title,
      presenter: result.data.presenter,
      description: result.data.event_description,
      time: result.data.event_date,
    };
  });
  return eventData;
}
