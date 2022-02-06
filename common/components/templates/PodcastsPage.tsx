/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import * as React from "react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/outline";
import RewindTenIcon from "../assets/replayTen.svg";
import ForwardThirtyIcon from "../assets/forwardThirty.svg";

import ContentSection from "../elements/ContentSection";
import DefaultLayout, { IGlobalData } from "../layouts/DefaultLayout";
import { IPageData } from "./types";
import TextHeader, { ITextHeader } from "../elements/TextHeader";
import RangeSlider from "../elements/RangeSlider";

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

interface IMediaPlayer {}

const dummyImage = {
    src: "/bible_photo.jpg",
    alt: "bible photo",
    blurDataURL: "bible_photo.jpg",
};

const audioSrc = "/short_music_podcast_placeholder.mp3";

const MediaPlayer: React.FC<IMediaPlayer> = () => {
    const [playing, setPlaying] = React.useState(false);
    const [trackProgress, setTrackProgress] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const audioRef = React.useRef<HTMLAudioElement>();
    // const { duration } = audioRef.current;
    const intervalRef = React.useRef<number>();
    const isReady = React.useRef(false);

    // define audio

    React.useEffect(() => {
        audioRef.current = new Audio(audioSrc);
        setDuration(audioRef.current.duration);
    }, []);

    // play pause
    React.useEffect(() => {
        if (playing) {
            audioRef.current?.play();
            startTimer();
        } else {
            audioRef.current?.pause();
        }
    }, [playing]);

    // cleanup on unmount
    React.useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current?.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    // timer to check on track and set progress
    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            if (audioRef.current?.ended) {
                // toNextTrack();
                setPlaying(false);
            } else {
                setTrackProgress(audioRef.current?.currentTime ?? 0);
            }
        }, 200);
    };

    const getProgressRatio = (trackProgress: number, duration: number) =>
        duration == 0 ? 0 : trackProgress / duration;

    const togglePlaying = () => setPlaying(!playing);

    const updateProgress = (value: number) => {
        if (!audioRef.current) return;
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
        startTimer();
    };

    const onScrub = (ratio: number) => {
        if (!audioRef.current) return;
        const value =
            (isNaN(audioRef.current?.duration ?? 0)
                ? 0
                : audioRef.current?.duration ?? 0) * ratio;
        updateProgress(value);
    };

    const updateProgressBy = (secs: number) => {
        if (!audioRef.current) return;
        const resultProgress =
            audioRef.current.currentTime + secs < 0
                ? 0
                : audioRef.current.currentTime + secs >
                  audioRef.current.duration
                ? audioRef.current.duration
                : audioRef.current.currentTime + secs;
        updateProgress(resultProgress);
    };

    const formatSeconds = (rawSeconds: number) => {
        const days = Math.floor(rawSeconds / (60 * 60 * 24));
        const hours = Math.floor(
            (rawSeconds - days * 60 * 60 * 24) / (60 * 60)
        );
        const minutes = Math.floor((rawSeconds - hours * 60 * 60) / 60);
        const seconds = Math.floor(rawSeconds - minutes * 60);

        const pad = (val: number) => `${val}`.padStart(2, "0");

        return (
            (days
                ? `${pad(days)}:`
                : "" + hours
                ? `${pad(hours)}:`
                : "" + minutes
                ? `${pad(minutes)}:`
                : "00:") + pad(seconds)
        );
    };

    return (
        <div tw="fixed h-24 filter ring-2 ring-black ring-opacity-5 bg-gray-50 left-0 right-0 bottom-0 z-50">
            <div tw="absolute w-full -translate-y-1/2">
                <RangeSlider
                    value={getProgressRatio(
                        trackProgress,
                        audioRef.current?.duration ?? 0
                    )}
                    onScrub={(ratio) => onScrub(ratio)}
                    max={audioRef.current?.duration}
                    formatFunction={formatSeconds}
                />
            </div>
            <div tw="flex">
                <div tw="pt-6 pl-3 flex">
                    <div tw="mr-3">
                        <div tw="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden relative">
                            <Image
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                                {...dummyImage}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 tw="font-bold mt-0 pt-0 leading-none">
                            God&apos;s Purpose with the earth
                        </h3>
                        <p tw="text-sm text-gray-700">2 mins left</p>
                    </div>
                </div>
                <div tw="pt-6 flex text-gray-500">
                    <button
                        tw="hidden sm:block"
                        onClick={() => updateProgressBy(-10)}
                    >
                        <RewindTenIcon tw="w-8 h-8" />
                    </button>
                    <button onClick={togglePlaying}>
                        {playing ? (
                            <PauseIcon tw="w-8 h-8" />
                        ) : (
                            <PlayIcon tw="w-8 h-8" />
                        )}
                    </button>
                    <button
                        tw="hidden sm:block"
                        onClick={() => updateProgressBy(30)}
                    >
                        <ForwardThirtyIcon tw="w-8 h-8" />
                    </button>
                </div>
                {/* <div tw="hidden sm:block">
                    volume slider
                </div> */}
                <p tw="hidden sm:block">00:04/02:25</p>
            </div>
        </div>
    );
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
            <MediaPlayer />
        </DefaultLayout>
    );
};

export default PodcastsPage;
