import React from "react";
import tw, { css, styled } from "twin.macro";
import EventsBlock, { IEventsBlock } from "./EventsBlock";
import HeroHeaderBlock, { IHeroHeaderBlock } from "./HeroHeaderBlock";
import ContactBlock, { IContactBlock } from "./ContactBlock";
import ImageCardBlock, { IImageCardBlock } from "./ImageCardBlock";
import TextContentBlock, { ITextContentBlock } from "./TextContentBlock";
import StandardHeaderBlock, {
    IStandardHeaderBlock,
} from "./StandardHeaderBlock";
import RelatedArticlesBlock, {
    IRelatedArticlesBlock,
} from "./RelatedArticlesBlock";

type ComponentType =
    | "hero"
    | "standardheader"
    | "events"
    | "contact"
    | "imagecard"
    | "textcontent"
    | "relatedarticles";

export interface IBlock {
    component: ComponentType;
    data:
        | IHeroHeaderBlock
        | IStandardHeaderBlock
        | IEventsBlock
        | IContactBlock
        | IImageCardBlock
        | ITextContentBlock
        | IRelatedArticlesBlock;
}

interface IBlockManager {
    blocks: IBlock[];
    space?: boolean;
}

const getBlockComponent = (block: IBlock, index: number) => {
    switch (block.component) {
        case "hero":
            return (
                <HeroHeaderBlock
                    {...(block.data as IHeroHeaderBlock)}
                    key={index}
                />
            );
        case "standardheader":
            return (
                <StandardHeaderBlock
                    {...(block.data as IStandardHeaderBlock)}
                    key={index}
                />
            );
        case "events":
            return (
                <EventsBlock {...(block.data as IEventsBlock)} key={index} />
            );
        case "contact":
            return (
                <ContactBlock {...(block.data as IContactBlock)} key={index} />
            );
        case "imagecard":
            return (
                <ImageCardBlock
                    {...(block.data as IImageCardBlock)}
                    key={index}
                />
            );
        case "textcontent":
            return (
                <TextContentBlock
                    {...(block.data as ITextContentBlock)}
                    key={index}
                />
            );
        case "relatedarticles":
            return (
                <RelatedArticlesBlock
                    {...(block.data as IRelatedArticlesBlock)}
                    key={index}
                />
            );
    }
};

const BlockManager: React.FC<IBlockManager> = ({ blocks, space = true }) => (
    <div css={[space && tw`space-y-10 pb-10`]}>
        {blocks.map((block, index) => getBlockComponent(block, index))}
    </div>
);

export default BlockManager;
