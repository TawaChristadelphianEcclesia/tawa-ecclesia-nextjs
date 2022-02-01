/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import TextContent from "./TextContent";

const ArticleContent: React.FC<{ content: string }> = ({ content }) => (
    <article tw="mb-5">
        <TextContent content={content} />
    </article>
);

export default ArticleContent;
