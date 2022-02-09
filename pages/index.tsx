import React from "react";
import { GetStaticProps } from "next";
import { getHomePageProps } from "../common/utils/HomePageData";
import HomePageTemplate, {
    IHomePageTemplate,
} from "../common/components/templates/HomePage";

const HomePage: React.FC<IHomePageTemplate> = (templateData) => (
    <HomePageTemplate {...templateData} />
);

export default HomePage;

export const getStaticProps: GetStaticProps<IHomePageTemplate> = async () => ({
    props: await getHomePageProps(),
});
