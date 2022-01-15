import react from "react";
import tw, { css, styled } from "twin.macro";
import EventsBlock, { IEventsBlock } from "./EventsBlock";
import HeroHeaderBlock, { IHeroHeaderBlock } from "./HeroHeaderBlock";
import ContactBlock, { IContactBlock } from "./ContactBlock";

type ComponentType = "hero" | "events" | "contact";

export interface IBlock {
    component: ComponentType;
    data: IHeroHeaderBlock | IEventsBlock | IContactBlock;
}

interface IBlockManager {
    blocks: IBlock[];
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
        case "events":
            return (
                <EventsBlock {...(block.data as IEventsBlock)} key={index} />
            );
        case "contact":
            return (
                <ContactBlock {...(block.data as IContactBlock)} key={index} />
            );
    }
};

const BlockManager: React.FC<IBlockManager> = ({ blocks }) => (
    <div tw="space-y-10 pb-10">
        {blocks.map((block, index) => getBlockComponent(block, index))}
    </div>
);

export default BlockManager;
