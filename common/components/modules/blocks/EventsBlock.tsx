import React from "react";
import Card from "../../elements/Card";
import ContentSection from "../../elements/ContentSection";
import EventList, { IEventList } from "../../elements/EventList";

export type IEventsBlock = IEventList

const EventsBlock: React.FC<IEventsBlock> = (props) => (
    <ContentSection>
        <Card animate>
            <EventList {...props} />
        </Card>
    </ContentSection>
);

export default EventsBlock;
