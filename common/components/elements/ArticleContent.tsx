/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import ReactMarkdown from "react-markdown";

const ArticleContent: React.FC<{ content: string }> = ({ content }) => (
    <article tw="prose mx-auto font-serif p-5">
        <ReactMarkdown>{content}</ReactMarkdown>
    </article>
);

export default ArticleContent;
