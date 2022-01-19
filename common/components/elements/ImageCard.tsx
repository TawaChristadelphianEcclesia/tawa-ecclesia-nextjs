/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import Button from "./Button";

export interface ILinkData {
    label: string;
    url: string;
}

export interface IImageCard {
    src: string;
    blurDataUrl?: string;
    alt: string;
    title: string;
    body: string;
    leftLink?: ILinkData;
    rightLink?: ILinkData;
}

const ImageCard: React.FC<IImageCard> = ({
    src,
    alt,
    blurDataUrl,
    title,
    body,
    leftLink,
    rightLink,
}) => (
    <div tw="flex flex-col md:flex-row">
        <div tw="relative h-52 md:h-80 md:flex-1">
            {/* <div tw="aspect-w-3 aspect-h-2"> */}
            <Image
                src={src}
                alt={alt}
                layout="fill"
                // objectFit="fill"
                placeholder={blurDataUrl ? "blur" : "empty"}
                blurDataURL={blurDataUrl}
            />
        </div>
        <div tw="flex-1">
            <h2 tw="text-gray-900 font-bold text-2xl">{title}</h2>
            <p>{body}</p>
            {leftLink && <Button href={leftLink.url}>{leftLink.label}</Button>}
            {rightLink && (
                <Button href={rightLink.url}>{rightLink.label}</Button>
            )}
        </div>
    </div>
);

export default ImageCard;
