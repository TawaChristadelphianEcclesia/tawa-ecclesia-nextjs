import React from "react";
import HeroHeader, { IHeroHeader } from "../elements/HeroHeader";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { ISeoData } from "../elements/Seo";

interface IPageData {
    seo: ISeoData;
}

type IHomePageData = IPageData & {
    headerData: IHeroHeader;
};

interface IHomePage {
    globalData: IGlobalData;
    pageData: IHomePageData;
}

const HomePage: React.FC<IHomePage> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        <HeroHeader {...pageData.headerData} />
    </DefaultLayout>
);

export default HomePage;
