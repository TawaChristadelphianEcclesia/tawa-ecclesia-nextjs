import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";

type IArticlePageData = IPageData & {
    title: string;
    summary: string;
    content: string;
    // headerData: IHeroHeader;
    // eventData: IEventList;
    // headerData: ITextHeader;
    // articleData: IArticleCard[];
};

export interface IArticleData {
    globalData: IGlobalData;
    pageData: IArticlePageData;
}

const Article: React.FC<IArticleData> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <h1>{pageData.title}</h1>
        <p>
            <i>{pageData.summary}</i>
        </p>
    </DefaultLayout>
);

export default Article;
