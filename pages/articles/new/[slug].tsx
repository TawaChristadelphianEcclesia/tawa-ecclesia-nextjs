import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    getAllArticleSlugs,
    getArticleData,
} from "../../../common/utils/ArticleData";
import Article, {
    IArticleData,
} from "../../../common/components/templates/Article";
import { IHeaderData } from "../../../common/components/modules/HeaderNavBar";
import { IFooterData } from "../../../common/components/modules/Footer";
import { getFooterData, getHeaderData } from "../../../lib/api";

// interface IArticlePage {
//     pageData: IArticleData;
//     globalData: {
//         headerData: IHeaderData;
//         footerData: IFooterData;
//     };
// }
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
