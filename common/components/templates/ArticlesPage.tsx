import React from "react";
import HeroHeader, { IHeroHeader } from "../elements/HeroHeader";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { ISeoData } from "../elements/Seo";
import EventList, { IEventList } from "../elements/EventList";
import Card from "../elements/Card";
import ContentSection from "../elements/ContentSection";
import ContactForm from "../elements/ContactForm";
import ImageCard from "../elements/ImageCard";
import { IArticleCard } from "../elements/ArticleCard";
import ArticleList from "../elements/ArticleList";
import TextHeader, { ITextHeader } from "../elements/TextHeader";

interface IPageData {
    seo: ISeoData;
}

type IArticlesPageData = IPageData & {
    // headerData: IHeroHeader;
    // eventData: IEventList;
    headerData: ITextHeader;
    articleData: IArticleCard[];
};

interface IArticlesPage {
    globalData: IGlobalData;
    pageData: IArticlesPageData;
}

const ArticlesPage: React.FC<IArticlesPage> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <ContentSection>
            <TextHeader {...pageData.headerData} />
        </ContentSection>
        <ContentSection>
            <ArticleList articles={pageData.articleData} />
        </ContentSection>
    </DefaultLayout>
);

export default ArticlesPage;
