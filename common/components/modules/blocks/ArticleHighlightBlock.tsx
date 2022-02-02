import React from "react";
import tw, { css, styled } from "twin.macro";
import ContentSection from "../../elements/ContentSection";
import ImageCard, { IImageCard } from "../../elements/ImageCard";
// import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

export type IArticleHighlightBlock = IImageCard;

const ArticleHighlightBlock: React.FC<IArticleHighlightBlock> = (props) => (
    <ContentSection>
        <ImageCard {...props} />
    </ContentSection>
);

export default ArticleHighlightBlock;
