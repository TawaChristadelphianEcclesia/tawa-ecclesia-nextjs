import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    getAllArticleSlugs,
    getArticleData,
} from "../../common/utils/ArticleData";
import Article, {
    IArticleData,
} from "../../common/components/templates/Article";

const ArticlePage: React.FC<IArticleData> = ({ pageData, globalData }) => {
    return <Article pageData={pageData} globalData={globalData} />;
};

export default ArticlePage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllArticleSlugs();
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IArticleData> = async ({
    params,
}) => {
    const data = await getArticleData(params!.slug as string);
    return {
        props: data,
    };
};
