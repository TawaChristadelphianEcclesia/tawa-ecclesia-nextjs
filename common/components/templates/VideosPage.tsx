import * as React from "react";
import ContentSection from "../elements/ContentSection";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import TextHeader, { ITextHeader } from "../elements/TextHeader";
import GridSection from "../elements/GridSection";
import VideoCard, { IVideoCard } from "../elements/VideoCard";

type IVideosPageData = IPageData & {
    headerData: ITextHeader;
    videos: IVideoCard[];
};

export interface IVideosPage {
    globalData: IGlobalData;
    pageData: IVideosPageData;
}

const VideosPage: React.FC<IVideosPage> = ({
    globalData,
    pageData: { seo, videos, headerData },
}) => {
    return (
        <DefaultLayout global={globalData} seo={seo}>
            <ContentSection>
                <TextHeader {...headerData}></TextHeader>
            </ContentSection>
            <GridSection padTop padBottom>
                {videos ? (
                    videos.map((video, i) => <VideoCard key={i} {...video} />)
                ) : (
                    <></>
                )}
            </GridSection>
        </DefaultLayout>
    );
};

export default VideosPage;
