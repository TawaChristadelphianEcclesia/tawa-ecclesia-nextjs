/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/outline";

import ContentSection from "../elements/ContentSection";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import TextHeader, { ITextHeader } from "../elements/TextHeader";

type IArticlesPageData = IPageData & {
    headerData: ITextHeader;
    podcasts: IPodcastListEntry[];
};

export interface IPodcastsPage {
    globalData: IGlobalData;
    pageData: IArticlesPageData;
}

interface IPodcastListEntry {
    image: IImageData;
    title: string;
    description: string;
    date: Date;
}

const PodcastListEntry: React.FC<IPodcastListEntry> = ({
    image,
    title,
    description,
    date,
}) => (
    <div tw="py-3 px-3 flex gap-3">
        <div>
            <div tw="w-28 h-28 rounded-xl overflow-hidden relative">
                <Image
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    {...image}
                />
            </div>
        </div>
        <div tw="flex flex-col">
            <h3 tw="font-bold">{title}</h3>
            <p tw="line-clamp-2 overflow-ellipsis">{description}</p>
            <div tw="mt-auto flex items-center">
                <button tw="flex items-center px-1 py-1 text-sm tracking-wide text-indigo-600 focus:text-white hover:text-white active:text-white uppercase transition-colors duration-200 rounded-full bg-indigo-200 hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                    <PlayIcon tw="w-5 h-5 mx-1" />
                    <span tw="mr-2">Play</span>
                </button>
                <span tw="text-gray-600 text-sm tracking-tight ml-3">
                    {`${date.toLocaleString("default", {
                        month: "short",
                        day: "2-digit",
                    })} • 40 mins 11 sec`}
                </span>
            </div>
        </div>
    </div>
);

const testImage = {
    src: "bible_photo.jpg",
    alt: "bible photo",
    blurDataURL: "bible_photo.jpg",
};

const PodcastsPage: React.FC<IPodcastsPage> = ({
    globalData,
    pageData: { seo, headerData, podcasts },
}) => {
    return (
        <DefaultLayout global={globalData} seo={seo}>
            <ContentSection>
                <TextHeader {...headerData}></TextHeader>
            </ContentSection>
            <ContentSection padTop padBottom>
                <div tw="bg-white rounded-2xl border-gray-100 border shadow-xl">
                    {/* <div>Title</div> */}
                    <div tw="divide-y">
                        {podcasts.map((podcast, i) => (
                            <PodcastListEntry key={i} {...podcast} />
                        ))}
                    </div>
                </div>
            </ContentSection>
        </DefaultLayout>
    );
};

export default PodcastsPage;
