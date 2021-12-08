import React from "react";
import HeroHeader, { IHeroHeader } from "../elements/HeroHeader";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { ISeoData } from "../elements/Seo";
import EventList, { IEventList } from "../elements/EventList";
import Card from "../elements/Card";
import GradientContentContainer from "../elements/GradientContentContainer";
import ContactForm from "../elements/ContactForm";

interface IPageData {
    seo: ISeoData;
}

type IHomePageData = IPageData & {
    headerData: IHeroHeader;
    eventData: IEventList;
};

interface IHomePage {
    globalData: IGlobalData;
    pageData: IHomePageData;
}

const HomePage: React.FC<IHomePage> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <HeroHeader {...pageData.headerData} />
        <GradientContentContainer>
            <Card>Latest Article</Card>
            <Card>
                <EventList {...pageData.eventData} />
            </Card>
            <Card>Podcast</Card>
            <Card>
                <ContactForm />
            </Card>
        </GradientContentContainer>
    </DefaultLayout>
);

export default HomePage;
