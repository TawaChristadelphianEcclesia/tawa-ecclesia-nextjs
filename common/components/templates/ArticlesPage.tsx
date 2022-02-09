import React from "react";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import ContentSection from "../elements/ContentSection";
import { IArticleCard } from "../elements/ArticleCard";
import ArticleList from "../elements/ArticleList";
import TextHeader, { ITextHeader } from "../elements/TextHeader";
import { IPageData } from "./types";

type IArticlesPageData = IPageData & {
    headerData: ITextHeader;
    articleData: IArticleCard[];
};

export interface IArticlesPage {
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
