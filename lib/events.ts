export interface IEventData {
  title: string;
  presenter: string;
  description: string;
  time: number;
}

export type IAllEventsData = IEventData[];

export async function getAllEvents(): Promise<IAllEventsData> {
  const eventData = [
    {
      title: "Event 1",
      description:
        "Laborum mollit magna dolore deserunt do ad in nisi commodo.",
      presenter: "Lorem Ipsum",
      time: Date.now(),
    },
  ];
  return eventData;
}
