import * as React from "react";
import ContentSection from "../elements/ContentSection";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import TextHeader, { ITextHeader } from "../elements/TextHeader";

type IArticlesPageData = IPageData & {
    headerData: ITextHeader;
};

export interface IPodcastsPage {
    globalData: IGlobalData;
    pageData: IArticlesPageData;
}

const PodcastsPage: React.FC<IPodcastsPage> = ({
    globalData,
    pageData: { seo, headerData },
}) => {
    return (
        <DefaultLayout global={globalData} seo={seo}>
            <ContentSection>
                <TextHeader {...headerData}></TextHeader>
            </ContentSection>
            under development - coming soon!
        </DefaultLayout>
    );
};

export default PodcastsPage;
