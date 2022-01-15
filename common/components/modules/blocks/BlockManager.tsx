import react from "react";
import EventsBlock, { IEventsBlock } from "./EventsBlock";
import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

type ComponentType = "hero" | "events";

export interface IBlock {
    component: ComponentType;
    data: IHeroHeader | IEventsBlock;
}

interface IBlockManager {
    blocks: IBlock[];
}

const getBlockComponent = (block: IBlock, index: number) => {
    switch (block.component) {
        case "hero":
            return <HeroHeader {...(block.data as IHeroHeader)} key={index} />;
        case "events":
            return (
                <EventsBlock {...(block.data as IEventsBlock)} key={index} />
            );
    }
};

const BlockManager: React.FC<IBlockManager> = ({ blocks }) => (
    <>{blocks.map((block, index) => getBlockComponent(block, index))}</>
);

export default BlockManager;
