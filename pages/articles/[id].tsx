import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Footer from "../../components/footer";
import HeaderNavBar from "../../components/headerNavBar";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import SliceZone from "../../components/sliceZone";
import {
  getAllPostIds,
  getFooterData,
  getHeaderData,
  getPostData,
  IFooterData,
  IHeaderData,
  IPostData,
} from "../../lib/api";

const BlogArticle: React.FC<{
  postData: IPostData;
  headerData: IHeaderData;
  footerData: IFooterData;
}> = ({ postData, headerData, footerData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <HeaderNavBar headerData={headerData} />
      <Heading
        title={postData.title}
        subtitle={RichText.render(postData.summary)}
        imageSrc={postData.titleImage.url}
        alt={postData.titleImage.alt}
        type={"Standard"}
      />
      <SliceZone slices={postData.body} />
      <Footer footerData={footerData} />
    </Layout>
  );
};

export default BlogArticle;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  return {
    props: {
      postData,
      headerData,
      footerData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
