import React from "react";
import { GetStaticProps } from "next";
import HomePage, {
    IHomePageData,
} from "../common/components/templates/HomePage";
import { IGlobalData } from "../common/components/layouts/DefaultLayout";
import getGlobalData from "../common/utils/GlobalData";
import getHomePageData from "../common/utils/HomePageData";

interface IIndexPage {
    globalData: IGlobalData;
    pageData: IHomePageData;
}

const IndexPage: React.FC<IIndexPage> = ({ globalData, pageData }) => (
    <HomePage globalData={globalData} pageData={pageData} />
);
export default IndexPage;

export const getStaticProps: GetStaticProps<IIndexPage> = async () => {
    const globalData = getGlobalData();
    const pageData = getHomePageData();
    return {
        props: {
            globalData,
            pageData,
        },
    };
};
