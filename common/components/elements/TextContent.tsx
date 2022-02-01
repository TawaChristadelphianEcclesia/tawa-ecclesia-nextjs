/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import ReactMarkdown from "react-markdown";

const TextContent: React.FC<{ content: string }> = ({ content }) => (
    <div tw="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
);

export default TextContent;
