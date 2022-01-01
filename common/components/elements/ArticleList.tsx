/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import ArticleCard, { IArticleCard } from "./ArticleCard";
import ArticlePagination from "./ArticlePagination";

interface IArticleList {
    articles: IArticleCard[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => (
    <div tw="mb-10">
        <div tw="flex flex-col space-y-4 pb-5">
            {articles.map((post, i) => (
                <ArticleCard {...post} key={i} />
            ))}
        </div>
        <div tw="pt-5">
            <ArticlePagination />
        </div>
    </div>
);

export default ArticleList;
