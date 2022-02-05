import React from "react";
import { GetStaticProps } from "next";
import VideosPageTemplate, {
    IVideosPage,
} from "../../common/components/templates/VideosPage";
import { getVideoHomePageData } from "../../common/utils/VideoData";

const VideosPage: React.FC<IVideosPage> = (templateData) => (
    <VideosPageTemplate {...templateData} />
);

export default VideosPage;

export const getStaticProps: GetStaticProps<IVideosPage> = async () => ({
    props: await getVideoHomePageData(),
});
