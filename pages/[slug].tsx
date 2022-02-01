import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
    getAllPageSlugs,
    getGeneralPageProps,
} from "../../common/utils/GeneralPageData";
import GeneralPageTemplate, {
    IGeneralPageTemplate,
} from "../../common/components/templates/GeneralPage";

const GeneralPage: React.FC<IGeneralPageTemplate> = (props) => {
    return <GeneralPageTemplate {...props} />;
};

export default GeneralPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPageSlugs();
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: await getGeneralPageProps(params!.slug as string),
    };
};
