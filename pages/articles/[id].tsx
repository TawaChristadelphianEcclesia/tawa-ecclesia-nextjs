import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import tw from "twin.macro";
import Footer from "../../components/footer";
import HeaderNavBar from "../../components/headerNavBar";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import SliceZone from "../../components/sliceZone";
import ArticleListEntry from "../../components/articleListEntry";
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
      <div tw="bg-gradient-to-t from-gray-200 p-2 pt-10">
        <div tw="rounded-lg bg-white shadow-sm overflow-hidden max-w-screen-sm mx-auto">
          {postData.relatedPosts && postData.relatedPosts.length && (
            <h2 tw="text-gray-900 font-sans text-2xl font-bold m-4">Read More</h2>
          )}
          {postData.relatedPosts?.map((post, i) => (
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
