import react from "react";
import HeroHeader, { IHeroHeader } from "../../elements/HeroHeader";

type ComponentType = "hero";

export interface IBlock {
    component: ComponentType;
    data: IHeroHeader;
}

interface IBlockManager {
    blocks: IBlock[];
}

const getBlockComponent = (block: IBlock, index: number) => {
    switch (block.component) {
        case "hero":
            return <HeroHeader {...(block.data as IHeroHeader)} key={index} />;
    }
};

const BlockManager: React.FC<IBlockManager> = ({ blocks }) => (
    <>{blocks.map((block, index) => getBlockComponent(block, index))}</>
);

export default BlockManager;
