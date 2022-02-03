/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import { XIcon } from "@heroicons/react/outline";
import Button from "./Button";

interface IVideoOverlay {
    url: string;
}

const processUrl = (url: string) => {
    var urlEl = new URL(url);
    if (urlEl.hostname == "www.youtube.com" && urlEl.pathname == "/watch") {
        urlEl = new URL(
            "https://www.youtube.com/embed/" + urlEl.searchParams.get("v")
        );
    }
    if (!urlEl.searchParams.get("rel")) {
        urlEl.searchParams.append("rel", "0");
    }
    return urlEl.toString();
};

const VideoOverlay: React.FC<IVideoOverlay> = ({ url }) => (
    <div tw="fixed inset-0 overflow-y-auto p-5 h-full w-full z-30 bg-white bg-opacity-80 flex flex-col">
        <div tw="max-w-screen-lg w-full mx-auto flex-grow">
            <div tw="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                <div tw="absolute top-0 left-0 right-0 bg-indigo-400 bg-opacity-20 hover:bg-opacity-70 h-10 z-50 flex items-center text-white transition-all duration-200">
                    <div tw="ml-auto flex items-center">
                        <Button iconButton variant="transparent">
                            <XIcon tw="h-5 w-5" />
                        </Button>
                    </div>
                </div>
                <div tw="bg-blue-500 absolute top-0 left-0 w-full h-full">
                    <iframe
                        height="100%"
                        width="100%"
                        src={processUrl(url)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
);

export default VideoOverlay;
