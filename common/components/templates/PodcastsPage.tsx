/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import * as React from "react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/outline";
import BarsIcon from "../assets/bars.svg";
import SpinIcon from "../assets/tail-spin.svg";

import ContentSection from "../elements/ContentSection";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import TextHeader, { ITextHeader } from "../elements/TextHeader";
import MediaPlayer, {
    formatSeconds,
    IMediaTrack,
    PlayerStatus,
} from "../elements/MediaPlayer";

type IArticlesPageData = IPageData & {
    headerData: ITextHeader;
    podcasts: IPodcastData[];
};

export interface IPodcastsPage {
    globalData: IGlobalData;
    pageData: IArticlesPageData;
}

export interface IPodcastData {
    image: IImageData;
    title: string;
    description: string;
    date: Date;
    fileUrl: string;
    duration: number;
}

type IPodcastListEntry = IPodcastData & {
    playStatus: PlayerStatus;
    onPlay: (track: IMediaTrack) => void;
};

const PodcastListEntry: React.FC<IPodcastListEntry> = ({
    image,
    title,
    description,
    date,
    fileUrl,
    onPlay,
    duration,
    playStatus,
}) => (
    <div tw="py-3 px-3 flex gap-3">
        <div>
            <div tw="w-14 h-14 sm:w-28 sm:h-28 rounded-xl overflow-hidden relative">
                <Image
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    {...image}
                />
            </div>
        </div>
        <div tw="flex flex-col">
            <h3 tw="font-bold line-clamp-2 overflow-ellipsis">{title}</h3>
            <p tw="line-clamp-2 overflow-ellipsis">{description}</p>
            <div tw="mt-auto flex items-center">
                <button
                    onClick={() => onPlay({ thumbnail: image, title, fileUrl })}
                    tw="flex items-center px-1 py-1 text-sm tracking-wide text-indigo-600 focus:text-white hover:text-white active:text-white uppercase transition-colors duration-200 rounded-full bg-indigo-200 hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                >
                    {playStatus == "idle" ? (
                        <>
                            <PlayIcon tw="w-5 h-5 mx-1" />{" "}
                            <span tw="mr-2">Play</span>
                        </>
                    ) : playStatus == "loading" ? (
                        <>
                            <SpinIcon tw="w-4 h-4 mx-1" />{" "}
                            <span tw="mr-2">Loading</span>
                        </>
                    ) : playStatus == "playing" ? (
                        <>
                            <BarsIcon tw="w-4 h-4 mx-1" />{" "}
                            <span tw="mr-2">Playing</span>
                        </>
                    ) : (
                        <>
                            <PauseIcon tw="w-5 h-5 mx-1" />{" "}
                            <span tw="mr-2">Paused</span>
                        </>
                    )}
                </button>
                <span tw="text-gray-600 text-sm tracking-tight ml-3">
                    {`${date.toLocaleString("default", {
                        month: "short",
                        day: "2-digit",
                    })} • ${formatSeconds(duration, "text")}`}
                </span>
            </div>
        </div>
    </div>
);

const PodcastsPage: React.FC<IPodcastsPage> = ({
    globalData,
    pageData: { seo, headerData, podcasts },
}) => {
    const [track, setTrack] = React.useState<IMediaTrack>();
    const [trackIndex, setTrackIndex] = React.useState<number>();
    const handleOnPlay = (track: IMediaTrack, index: number) => {
        setTrackIndex(index);
        setTrack(track);
    };
    const [playStatus, setPlayStatus] = React.useState<PlayerStatus>("idle");
    const getStatus = (
        i: number,
        playStatus: PlayerStatus,
        trackIndex?: number
    ): PlayerStatus => {
        if (i == trackIndex) {
            return playStatus;
        } else {
            return "idle";
        }
    };
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
                            <PodcastListEntry
                                key={i}
                                {...podcast}
                                playStatus={getStatus(
                                    i,
                                    playStatus,
                                    trackIndex
                                )}
                                onPlay={(track) => handleOnPlay(track, i)}
                            />
                        ))}
                    </div>
                </div>
            </ContentSection>
            {track && (
                <MediaPlayer track={track} onStatusChange={setPlayStatus} />
            )}
        </DefaultLayout>
    );
};

export default PodcastsPage;

// onPlayingChange, onLoadingChange
