/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
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

const RangeSlider = styled.input`
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    &:focus {
        outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    &::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    /* style thumb */
    /* Special styling for WebKit/Blink */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${tw`bg-indigo-500 w-4 h-4 rounded-full cursor-pointer -m-2`}
    }

    /* All the same stuff for Firefox */
    &::-moz-range-thumb {
        ${tw`bg-indigo-500 w-4 h-4 rounded-full cursor-pointer`}
    }

    /* All the same stuff for IE */
    &::-ms-thumb {
        ${tw`bg-indigo-500 w-4 h-4 rounded-full cursor-pointer`}
    }

    &::-webkit-slider-runnable-track {
        ${tw`w-full bg-indigo-500 h-px`}// width: 100%;
        // height: 8.4px;
        // cursor: pointer;
        // box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        // background: #3071a9;
        // border-radius: 1.3px;
        // border: 0.2px solid #010101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    }

    &:focus::-webkit-slider-runnable-track {
        ${tw`h-0.5`}// background: #367ebd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    }

    &::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    &::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
    &::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &:focus::-ms-fill-lower {
        background: #3071a9;
    }
    &::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    &:focus::-ms-fill-upper {
        background: #367ebd;
    }
`;

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
    return (
        <div tw="fixed h-24 filter ring-2 ring-black ring-opacity-5 bg-gray-50 left-0 right-0 bottom-0 z-50">
            <div tw="absolute left-6 right-6 -translate-y-1/2 ">
                <VolumeSlider />
            </div>
            {/* <div tw="w-full h-12">
                <div tw="w-full h-px" />
            </div> */}
            {/* <div tw="absolute w-full -translate-y-1/2"> */}
            {/* <RangeSlider type="range" /> */}
            {/* </div> */}
            <div tw="flex">
                <div>
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
                    <h3>Title</h3>
                    <p>2 mins left</p>
                </div>
                <div>
                    <button>back button</button>
                    <button>play button</button>
                    <button>forward button </button>
                </div>
                <div>
                    volume slider
                    <RangeSlider type="range" step="any" />
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
