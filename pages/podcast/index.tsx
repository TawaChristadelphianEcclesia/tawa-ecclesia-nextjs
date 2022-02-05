import React from "react";
import { GetStaticProps } from "next";
import PodcastsPageTemplate, {
    IPodcastsPage,
} from "../../common/components/templates/PodcastsPage";
import { getVideoHomePageData } from "../../common/utils/VideoData";

const PodcastsPage: React.FC<IPodcastsPage> = (templateData) => (
    <PodcastsPageTemplate {...templateData} />
);

export default PodcastsPage;

export const getStaticProps: GetStaticProps<IPodcastsPage> = async () => ({
    props: await getVideoHomePageData(),
});
