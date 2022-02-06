/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import * as React from "react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/outline";

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

interface IVolumeSlider {
    value?: number;
    onUpdate?: (ratio: number) => void;
}

const VolumeSlider: React.FC<IVolumeSlider> = ({ value, onUpdate }) => {
    const [ratio, setRatio] = React.useState(0.5);
    const [dragging, setDragging] = React.useState(false);
    const draggingRef = React.useRef(false);
    const parentSliderEl = React.useRef<HTMLDivElement>(null);

    const onMouseDown = (e: any) => {
        // only left mouse button
        if (e.button !== 0) return;
        setDragging(true);
        e.stopPropagation();
        e.preventDefault();
    };
    const onMouseUp = (e: any) => {
        setDragging(false);
        e.stopPropagation();
        e.preventDefault();
    };
    const onMouseMove = (e: any) => {
        if (!draggingRef.current) return;
        const ratio =
            (e.pageX - parentSliderEl!.current!.getBoundingClientRect().left) /
            parentSliderEl!.current!.getBoundingClientRect().width;
        setRatio(ratio > 1 ? 1 : ratio < 0 ? 0 : ratio);
        e.stopPropagation();
        e.preventDefault();
    };
    React.useEffect(() => {
        draggingRef.current = dragging;
        if (draggingRef.current) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        } else if (!draggingRef.current) {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        }
    }, [dragging]);
    React.useEffect(() => {
        value && setRatio(value);
    }, [value]);
    React.useEffect(() => {
        onUpdate && onUpdate(ratio);
    }, [ratio, onUpdate]);

    return (
        <div
            tw="w-full h-12 cursor-pointer"
            className="group"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={10000}
            aria-valuenow={10000 * ratio}
            onMouseDown={onMouseDown}
            ref={parentSliderEl}
        >
            <div tw="h-px bg-indigo-300 absolute top-6 w-full"></div>
            <div
                tw="bg-indigo-400 absolute left-0 w-full origin-left"
                css={`
                    top: 23px;
                    height: 3px;
                    transform: scale(${ratio}, 1);
                `}
            />
            <div
                tw="absolute w-4 h-4 -ml-2 rounded-full bg-indigo-400 top-4 transform transition duration-300 group-active:scale-150"
                css={`
                    left: ${ratio * 100}%;
                `}
            />
        </div>
    );
};

const MediaPlayer: React.FC<IMediaPlayer> = () => {
    const [playing, setPlaying] = React.useState(false);
    const togglePlaying = () => setPlaying(!playing);
    return (
        <div tw="fixed h-24 filter ring-2 ring-black ring-opacity-5 bg-gray-50 left-0 right-0 bottom-0 z-50">
            <div tw="absolute w-full -translate-y-1/2">
                <VolumeSlider />
            </div>
            <div tw="flex">
                <div tw="pt-6 pl-3 flex">
                    <div tw="mr-3">
                        <div tw="w-14 h-14 rounded-xl overflow-hidden relative">
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
                    <button>Replay Ten</button>
                    <button onClick={togglePlaying}>
                        {playing ? (
                            <PlayIcon tw="w-8 h-8" />
                        ) : (
                            <PauseIcon tw="w-8 h-8" />
                        )}
                    </button>
                    <button>Forward Thirty</button>
                </div>
                <div>
                    volume slider
                    {/* <VolumeSlider /> */}
                </div>
                <p>00:04/02:25</p>
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
