import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";

export type IArticleData = IPageData & {
    title: string;
    summary: string;
    content: string;
    // headerData: IHeroHeader;
    // eventData: IEventList;
    // headerData: ITextHeader;
    // articleData: IArticleCard[];
};

interface IArticle {
    globalData: IGlobalData;
    pageData: IArticleData;
}

const Article: React.FC<IArticle> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <h1></h1>
    </DefaultLayout>
);

export default Article;
