import React from "react";
import tw, { css, styled } from "twin.macro";
import ImageCard, { IImageCard } from "../../elements/ImageCard";
// import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

export type IImageCardBlock = IImageCard;

const ImageCardBlock: React.FC<IImageCardBlock> = (props) => (
    <ImageCard {...props} />
);

export default ImageCardBlock;
