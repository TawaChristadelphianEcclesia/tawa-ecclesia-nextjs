import React from "react";
import HeroHeader, { IHeroHeader } from "../elements/HeroHeader";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { ISeoData } from "../elements/Seo";
import EventList, { IEventList } from "../elements/EventList";
import Card from "../elements/Card";
import Gradient from "../elements/Gradient";
import ContentSection from "../elements/ContentSection";
import ContactForm from "../elements/ContactForm";
import ImageCard from "../elements/ImageCard";

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
        <Gradient>
            <ContentSection padTop padBottom>
                <Card animate>Latest Article</Card>
                <Card animate>
                    <EventList {...pageData.eventData} />
                </Card>
                <Card animate>
                    <ImageCard
                        src="undraw_podcast.svg"
                        alt="podcast illustration"
                    >
                        <h2 tw="text-gray-900 font-bold text-2xl">Podcast</h2>
                        <p>
                            Interested in the truth of the bible? Join us as we
                            discuss a range of biblical topics.
                        </p>
                    </ImageCard>
                </Card>
                <Card animate>
                    <ContactForm />
                </Card>
            </ContentSection>
        </Gradient>
    </DefaultLayout>
);

export default HomePage;
