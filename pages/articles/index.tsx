import React from "react";
// import { graphql, Link, PageProps } from 'gatsby';
import "twin.macro";
import tw from "twin.macro";
import Head from "next/head";
import Layout from "../../components/layout";
// import SEO from '../components/seo';
import ArticleListEntry from "../../components/articleListEntry";
import Heading from "../../components/heading";
import {
    getAllPosts,
    getBlogPageData,
    getFooterData,
    getHeaderData,
    getHomePageData,
    IBlogPageData,
    IFooterData,
    IHeaderData,
    IPostData,
} from "../../lib/api";
import { GetStaticProps } from "next";
import HeaderNavBar from "../../components/headerNavBar";
import Footer from "../../components/footer";
import { RichText } from "prismic-reactjs";

const BlogPage: React.FC<{
    pageData: IBlogPageData;
    headerData: IHeaderData;
    footerData: IFooterData;
    postData: IPostData[];
}> = ({ pageData, headerData, footerData, postData }) => {
    // dropshadow and gradeint
    return (
        <Layout>
            <Head>
                <title>{pageData.title}</title>
            </Head>
            <HeaderNavBar headerData={headerData} />
            {/* <SEO title="Articles" /> */}
            <div tw="bg-gradient-to-t from-gray-200 p-2">
                <Heading title={pageData.title} subtitle="" type="Standard" />
                <div tw="rounded-lg bg-white shadow-sm overflow-hidden max-w-screen-sm mx-auto">
                    {postData.map((post, i) => (
                        <ArticleListEntry
                            key={i}
                            title={post.title}
                            titleImage={post.titleImage}
                            summary={RichText.asText(post.summary)}
                            url={post.url}
                            tags={post.tags}
                            datePublished={new Date(post.datePublished)}
                            readingTime={post.readingTime}
                        />
                    ))}
                    {/* <div tw="px-4 py-2 border-gray-300">
            <button tw="bg-gray-100 hover:bg-gray-200 focus:bg-gray-100 text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block rounded transition-all">
              More
            </button>
          </div> */}
                </div>
            </div>
            <Footer footerData={footerData} />
        </Layout>
    );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
    const pageData = await getBlogPageData();
    const headerData = await getHeaderData();
    const footerData = await getFooterData();
    const postData = await getAllPosts();
    return {
        props: {
            pageData,
            headerData,
            footerData,
            postData,
        },
    };
};
