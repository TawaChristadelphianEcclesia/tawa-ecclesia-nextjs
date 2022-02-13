/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import React from "react";
import Card from "../../elements/Card";
import ContentSection from "../../elements/ContentSection";
import VideoOverlay from "../../elements/VideoOverlay";
import Image from "next/image";
import Button from "../../elements/Button";

interface IVideoDetails {
    url: string;
    title: string;
    description?: string;
}

export interface IVideoHighlightBlock {
    image: IImageData;
    title: string;
    subtitle?: string;
    body: string;
    highlightVideo?: IVideoDetails;
}

const VideoHighlightBlock: React.FC<IVideoHighlightBlock> = ({
    image,
    title,
    subtitle,
    body,
    highlightVideo,
}) => {
    const [overlayShowing, setOverlayShowing] = React.useState(false);

    return (
        <ContentSection>
            <Card animate>
                <div tw="flex flex-col md:flex-row">
                    <div tw="relative h-52 md:h-80 md:flex-1">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                            sizes="100%"
                            placeholder={image.blurDataURL ? "blur" : "empty"}
                            blurDataURL={image.blurDataURL}
                        />
                    </div>
                    <div tw="flex-1 mt-5 md:mt-0 md:pl-5 flex flex-col">
                        <div tw="mb-2">
                            <h2 tw="text-gray-900 text-3xl">{title}</h2>
                            {subtitle && <i tw="text-gray-700">{subtitle}</i>}
                        </div>
                        <p tw="text-gray-900">{body}</p>
                        {highlightVideo && (
                            <>
                                <h2 tw="text-gray-900 font-sans text-lg sm:text-xl font-bold mt-2">
                                    {highlightVideo.title}
                                </h2>
                                <p tw="text-gray-900 line-clamp-4 overflow-ellipsis">
                                    {highlightVideo.description}
                                </p>
                            </>
                        )}
                        <div tw="mt-auto pt-5 flex justify-center gap-5">
                            <div>
                                {highlightVideo && (
                                    <Button
                                        variant="contained"
                                        onClick={() => setOverlayShowing(true)}
                                    >
                                        {"Watch"}
                                    </Button>
                                )}
                            </div>
                            <div>
                                <Button href={"/videos"} variant="contained">
                                    {"View All"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            {highlightVideo && (
                <VideoOverlay
                    url={highlightVideo.url}
                    visible={overlayShowing}
                    onClose={() => setOverlayShowing(false)}
                />
            )}
        </ContentSection>
    );
};

export default VideoHighlightBlock;
