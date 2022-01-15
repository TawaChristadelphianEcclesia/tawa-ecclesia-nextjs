import react from "react";
import EventList, { IEventList } from "../../elements/EventList";
import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

type ComponentType = "hero" | "events";

export interface IBlock {
    component: ComponentType;
    data: IHeroHeader | IEventList;
}

interface IBlockManager {
    blocks: IBlock[];
}

const getBlockComponent = (block: IBlock, index: number) => {
    switch (block.component) {
        case "hero":
            return <HeroHeader {...(block.data as IHeroHeader)} key={index} />;
        case "events": 
            return <EventList {...(block.data as IEventList)} key={index} />;
    }
};

const BlockManager: React.FC<IBlockManager> = ({ blocks }) => (
    <>{blocks.map((block, index) => getBlockComponent(block, index))}</>
);

export default BlockManager;
