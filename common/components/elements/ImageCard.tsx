/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import Button from "./Button";
import Card from "./Card";

export interface ILinkData {
    label: string;
    url: string;
}

export interface IImageCard {
    src: string;
    blurDataUrl?: string;
    alt: string;
    title: string;
    subtitle?: string;
    body: string;
    leftLink?: ILinkData;
    rightLink?: ILinkData;
}

const ImageCard: React.FC<IImageCard> = ({
    src,
    alt,
    blurDataUrl,
    title,
    subtitle,
    body,
    leftLink,
    rightLink,
}) => (
    <Card animate>
        <div tw="flex flex-col md:flex-row">
            <div tw="relative h-52 md:h-80 md:flex-1">
                {/* <div tw="aspect-w-3 aspect-h-2"> */}
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="contain"
                    sizes="100%"
                    placeholder={blurDataUrl ? "blur" : "empty"}
                    blurDataURL={blurDataUrl}
                />
            </div>
            <div tw="flex-1 md:pl-5 flex flex-col">
                <div tw="mb-2">
                    <h2 tw="text-gray-900 font-bold text-2xl">{title}</h2>
                    {subtitle && <i>{subtitle}</i>}
                </div>
                <p>{body}</p>
                <div tw="mt-auto flex justify-center gap-5">
                    {leftLink && (
                        <div>
                            <Button href={leftLink.url} variant="contained">
                                {leftLink.label}
                            </Button>
                        </div>
                    )}
                    {rightLink && (
                        <div>
                            <Button href={rightLink.url} variant="contained">
                                {rightLink.label}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </Card>
);

export default ImageCard;
