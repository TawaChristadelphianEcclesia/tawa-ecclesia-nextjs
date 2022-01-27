import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import ReactMarkdown from "react-markdown";
import ArticleContent from "../elements/ArticleContent";
import StandardHeader from "../elements/StandardHeader";

type IArticlePageData = IPageData & {
    title: string;
    summary: string;
    content: string;
    image: string;
    imageBlurDataURL: string;
    alt?: string;
};

export interface IArticleData {
    globalData: IGlobalData;
    pageData: IArticlePageData;
}

const Article: React.FC<IArticleData> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <StandardHeader
            title={pageData.title}
            summary={pageData.summary}
            image={pageData.image}
            imageBlurDataURL={pageData.imageBlurDataURL}
            alt={pageData.alt}
        />
        <ArticleContent content={pageData.content} />
    </DefaultLayout>
);

export default Article;
