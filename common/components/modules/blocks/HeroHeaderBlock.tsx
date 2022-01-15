import React from "react";
import tw, { css, styled } from "twin.macro";
import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

export type IHeroHeaderBlock = IHeroHeader;

const HeroHeaderBlock: React.FC<IHeroHeaderBlock> = (props) => (
    <HeroHeader {...props} />
);

export default HeroHeaderBlock;
