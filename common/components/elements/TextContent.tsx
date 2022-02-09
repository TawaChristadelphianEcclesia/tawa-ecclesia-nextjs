/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import ReactMarkdown from "react-markdown";

const TextContent: React.FC<{ content: string }> = ({ content }) => (
    <div tw="mx-auto prose px-5 sm:px-0">
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
);

export default TextContent;
