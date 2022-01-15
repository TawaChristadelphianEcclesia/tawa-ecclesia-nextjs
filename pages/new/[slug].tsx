import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPageSlugs } from "../../common/utils/PageData";

export interface IGeneralPage {
    slug: string[];
    id: string;
}

const GeneralPage: React.FC<IGeneralPage> = ({ slug, id }) => {
    return (
        <div>
            slug is {slug} id is {id}
        </div>
    );
};

export default GeneralPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPageSlugs();
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            slug: params!.slug,
            id: params!.id,
        },
    };
};
