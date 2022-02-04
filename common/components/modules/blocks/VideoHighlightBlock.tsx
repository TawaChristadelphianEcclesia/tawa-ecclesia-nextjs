/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import React from "react";
import Card from "../../elements/Card";
import ContentSection from "../../elements/ContentSection";
import ImageCard from "../../elements/ImageCard";
import VideoOverlay from "../../elements/VideoOverlay";
import Image from "next/image";
import Button from "../../elements/Button";

export interface IVideoHighlightBlock {
    url: string;
    image: IImageData;
    title: string;
    subtitle?: string;
    body: string;
}

const VideoHighlightBlock: React.FC<IVideoHighlightBlock> = ({
    image,
    title,
    subtitle,
    body,
    url,
}) => {
    const [overlayShowing, setOverlayShowing] = React.useState(true);

    return (
        <ContentSection>
            <Card animate>
                <div tw="flex flex-col md:flex-row">
                    <div tw="relative h-52 md:h-80 md:flex-1">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                            sizes="100%"
                            placeholder={image.blurDataUrl ? "blur" : "empty"}
                            blurDataURL={image.blurDataUrl}
                        />
                    </div>
                    <div tw="flex-1 mt-5 md:mt-0 md:pl-5 flex flex-col">
                        <div tw="mb-2">
                            <h2 tw="text-gray-900 text-3xl">{title}</h2>
                            {subtitle && <i tw="text-gray-700">{subtitle}</i>}
                        </div>
                        <p tw="text-gray-900">{body}</p>
                        <div tw="mt-auto flex justify-center gap-5">
                            <div>
                                <Button
                                    variant="contained"
                                    onClick={() => setOverlayShowing(true)}
                                >
                                    {"Watch"}
                                </Button>
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
            {/* {overlayShowing && ( */}
            <VideoOverlay
                url={url}
                visible={overlayShowing}
                onClose={() => setOverlayShowing(false)}
            />
            {/* )} */}
        </ContentSection>
    );
};

export default VideoHighlightBlock;
