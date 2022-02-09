/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import ArticleCard, { IArticleCard } from "./ArticleCard";

export interface IRelatedArticles {
    title: string;
    articles: IArticleCard[];
}

const RelatedArticles: React.FC<IRelatedArticles> = ({ title, articles }) => (
    <div tw="bg-gradient-to-t from-gray-200 p-2 py-10">
        <div tw="rounded-lg bg-white shadow-sm overflow-hidden max-w-screen-sm mx-auto">
            <h2 tw="text-gray-900 font-sans text-2xl font-bold m-4">{title}</h2>
            {articles.map((article, i) => (
                <ArticleCard key={i} {...article} />
            ))}
        </div>
    </div>
);

export default RelatedArticles;
