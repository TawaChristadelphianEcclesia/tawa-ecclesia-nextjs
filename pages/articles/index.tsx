import React from "react";
import { GetStaticProps } from "next";
import ArticlesPageTemplate, {
    IArticlesPage,
} from "../../common/components/templates/ArticlesPage";
import { getArticleHomePageData } from "../../common/utils/ArticleData";

const ArticlesPage: React.FC<IArticlesPage> = (templateData) => (
    <ArticlesPageTemplate {...templateData} />
);

export default ArticlesPage;

export const getStaticProps: GetStaticProps<IArticlesPage> = async () => ({
    props: await getArticleHomePageData(),
});
