/** @jsxImportSource @emotion/react */
import React, { Fragment, ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import { XIcon } from "@heroicons/react/outline";
import Button from "./Button";
import Transition from "./Transition";

interface IVideoOverlay {
    url: string;
    visible?: boolean;
    onClose: () => void;
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

const transitionProps = {
    enter: tw`transition-opacity duration-300`,
    enterFrom: tw`opacity-0 `,
    enterTo: tw`opacity-100 `,
    leave: tw`transition-opacity duration-500`,
    leaveFrom: tw`opacity-100`,
    leaveTo: tw`opacity-0`,
};

const VideoOverlay: React.FC<IVideoOverlay> = ({
    url,
    onClose,
    visible = true,
}) => (
    <Transition as={Fragment} show={visible} {...transitionProps}>
        <div
            css={[
                tw`fixed inset-0 overflow-y-auto p-5 h-full w-full z-30 bg-white bg-opacity-80 flex flex-col`,
                // !visible && tw`hidden`,
            ]}
        >
            <div tw="max-w-screen-lg w-full mx-auto flex-grow">
                <div tw="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-md">
                    <div tw="absolute top-0 left-0 right-0 bg-indigo-400 bg-opacity-20 hover:bg-opacity-70 h-10 z-50 flex items-center text-white transition-all duration-200">
                        <div tw="ml-auto flex items-center">
                            <Button
                                iconButton
                                variant="transparent"
                                onClick={onClose}
                            >
                                <XIcon tw="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div tw="bg-gray-400 bg-opacity-60 backdrop-blur absolute top-0 left-0 w-full h-full">
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
    </Transition>
);

export default VideoOverlay;
