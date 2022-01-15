import React from "react";
import Card from "../../elements/Card";
import ContentSection from "../../elements/ContentSection";
// import EventList, { IEventList } from "../../elements/EventList";
import ContactForm, { IContactForm } from "../../elements/ContactForm";

export type IContactBlock = IContactForm;

const ContactBlock: React.FC<IContactBlock> = (props) => (
    <ContentSection>
        <Card animate>
            <ContactForm {...props} />
        </Card>
    </ContentSection>
);

export default ContactBlock;
