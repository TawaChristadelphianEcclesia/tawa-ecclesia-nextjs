import React from "react";
import RelatedArticles, { IRelatedArticles } from "../../elements/RelatedArticles";

export type IRelatedArticlesBlock = IRelatedArticles;

const RelatedArticlesBlock: React.FC<IRelatedArticlesBlock> = (props) => (
    <RelatedArticles {...props} />
);

export default RelatedArticlesBlock;
