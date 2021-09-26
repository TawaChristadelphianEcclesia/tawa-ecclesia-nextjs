import React from "react";
import "twin.macro";
import tw, { styled } from "twin.macro";
import Layout from "../components/layout";
import HeaderNavBar from "../components/headerNavBar";
// import { RichText, RichTextBlock } from "prismic-reactjs";
import Heading from "../components/heading";
import Card from "../components/card";
import Event from "../components/event";
import Footer from "../components/footer";
import { getHomePageData, IHomePageData } from "../lib/homepage";
import { GetStaticProps } from "next";
import {
  getFooterData,
  getHeaderData,
  IFooterData,
  IHeaderData,
} from "../lib/headerFooter";
import { getAllEvents, IAllEventsData, IEventData } from "../lib/events";
import { RichText } from "prismic-reactjs";

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;
// or use the shorthand version
// const Button = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `

const IndexPage: React.FC<{
  pageData: IHomePageData;
  headerData: IHeaderData;
  footerData: IFooterData;
  eventsData: IAllEventsData;
}> = ({ pageData, headerData, footerData, eventsData }) => (
  <Layout>
    <HeaderNavBar headerData={headerData} />
    <Heading
      type="Full Bleed"
      title={RichText.render(pageData.title)}
      subtitle={RichText.render(pageData.subtitle)}
      imageSrc={pageData.image.url}
      textColor={pageData.textColor}
    />
    <div tw="bg-gradient-to-t from-gray-200 to-gray-50 py-10 px-2">
      <div tw="max-w-screen-sm mx-auto">
        <Card>
          <div
            style={{
              marginTop: "10px",
              borderBottom: "1px solid #f1f1f1",
              padding: 10,
            }}
          >
            <div>
              <h2 tw="text-gray-900 text-4xl">What's coming up?</h2>
            </div>
          </div>
          {eventsData.map((event, key) => (
            <Event
              key={key}
              title={RichText.render(event.title)}
              presenter={RichText.render(event.presenter)}
              description={RichText.render(event.description)}
              datetime={new Date(event.time)}
            ></Event>
          ))}
        </Card>
      </div>
    </div>
    <Footer footerData={footerData} />
  </Layout>
);
export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getHomePageData();
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  const eventsData = await getAllEvents();
  return {
    props: {
      pageData,
      headerData,
      footerData,
      eventsData,
    },
  };
};
