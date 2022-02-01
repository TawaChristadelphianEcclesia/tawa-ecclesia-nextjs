import React from "react";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import BlockManager, { IBlock } from "../modules/blocks/BlockManager";

export type IGeneralPageData = IPageData & {
    blocks: IBlock[];
};

export interface IGeneralPageTemplate {
    globalData: IGlobalData;
    pageData: IGeneralPageData;
}

const GeneralPageTemplate: React.FC<IGeneralPageTemplate> = ({
    globalData,
    pageData: { seo, blocks },
}) => (
    <DefaultLayout seo={seo} global={globalData}>
        <BlockManager blocks={blocks}></BlockManager>
    </DefaultLayout>
);

export default GeneralPageTemplate;
