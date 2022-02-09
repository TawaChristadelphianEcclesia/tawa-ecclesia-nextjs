import React from "react";
import ContentSection from "../../elements/ContentSection";
import TextContent from "../../elements/TextContent";

export interface ITextContentBlock {
    content: string;
}

const TextContentBlock: React.FC<ITextContentBlock> = ({ content }) => (
    <ContentSection>
        <TextContent content={content} />
    </ContentSection>
);

export default TextContentBlock;
