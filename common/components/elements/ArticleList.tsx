/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import ArticleCard, { IArticleCard } from "./ArticleCard";
import Card from "./Card";

interface IArticleList {
    articles: IArticleCard[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => (
    <div tw="space-y-2">
        {articles.map((post, i) => (
            <ArticleCard {...post} key={i} />
        ))}
    </div>
);

export default ArticleList;
