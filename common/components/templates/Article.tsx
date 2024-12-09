import React from "react";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import ReactMarkdown from "react-markdown";
import ArticleContent from "../elements/ArticleContent";
import StandardHeader from "../elements/StandardHeader";
import BlockManager, { IBlock } from "../modules/blocks/BlockManager";

type IArticlePageData = IPageData & {
    title: string;
    summary: string;
    content: string;
    image: IImageData;
    blocks?: IBlock[];
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
        />
        <ArticleContent content={pageData.content} />
        {pageData.blocks && (
            <BlockManager blocks={pageData.blocks} space={false} />
        )}
    </DefaultLayout>
);

export default Article;
