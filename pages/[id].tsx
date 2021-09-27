import { GetStaticPaths, GetStaticProps } from "next";
import { RichText } from "prismic-reactjs";
import React from "react";
import Footer from "../components/footer";
import HeaderNavBar from "../components/headerNavBar";
import Heading from "../components/heading";
import Layout from "../components/layout";
import SliceZone from "../components/sliceZone";
import {
  getAllEvents,
  getAllPageIds,
  getFooterData,
  getHeaderData,
  getHomePageData,
  getPageData,
  IFooterData,
  IHeaderData,
  IHomePageData,
  IPageData,
} from "../lib/api";

const GeneralPage: React.FC<{
  pageData: IPageData;
  headerData: IHeaderData;
  footerData: IFooterData;
}> = ({ headerData, footerData, pageData }) => {
  return (
    <Layout>
      <HeaderNavBar headerData={headerData} />
      <Heading
        type={pageData.headingType}
        title={RichText.render(pageData.title)}
        subtitle={RichText.render(pageData.subtitle)}
        imageSrc={pageData.heroImage.url}
        textColor={pageData.textColor}
      />
      <SliceZone slices={pageData.body} />
      <Footer footerData={footerData} />
    </Layout>
  );
};

export default GeneralPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPageIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getPageData(params!.id as string);
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  return {
    props: {
      pageData,
      headerData,
      footerData,
    },
  };
};
