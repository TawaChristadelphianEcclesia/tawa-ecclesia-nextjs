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
import { IPageData } from "./types";
import BlockManager, { IBlock } from "../modules/blocks/BlockManager";

// export type IHomePageData = IPageData;
export type IHomePageData = IPageData & {
    blocks: IBlock[];
};
// export type IHomePageData = IPageData & {
//     headerData: IHeroHeader;
//     eventData: IEventList;
// };

export interface IHomePageTemplate {
    globalData: IGlobalData;
    pageData: IHomePageData;
}

const HomePageTemplate: React.FC<IHomePageTemplate> = ({
    globalData,
    pageData: { seo, blocks },
}) => (
    <DefaultLayout seo={seo} global={globalData}>
        <BlockManager blocks={blocks}></BlockManager>
        {/* <HeroHeader {...pageData.headerData} />
        <Gradient>
            <ContentSection padTop padBottom>
                <Card animate>Latest Article</Card>
                <Card animate>
                    <EventList {...pageData.eventData} />
                </Card>
                <Card animate>
                    <ImageCard
                        src="/undraw_podcast.svg"
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
        </Gradient> */}
    </DefaultLayout>
);

export default HomePageTemplate;
