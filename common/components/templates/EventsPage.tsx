/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import { IPageData } from "./types";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";

export interface IEventsPage {
    globalData: IGlobalData;
    pageData: IPageData & {
        title: string;
        // datetime: Date;
        // presenter: string;
        // location: string;
        // description: string;
        // image: IImageData;
    };
}

const EventsPage: React.FC<IEventsPage> = ({ globalData, pageData }) => (
    <DefaultLayout seo={pageData.seo} global={globalData}>
        list of all upcoming event
    </DefaultLayout>
);

export default EventsPage;
