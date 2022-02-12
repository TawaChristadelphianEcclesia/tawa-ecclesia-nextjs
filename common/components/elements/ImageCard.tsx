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
    image: IImageData;
    title: string;
    subtitle?: string;
    body: string;
    leftLink?: ILinkData;
    rightLink?: ILinkData;
}

const ImageCard: React.FC<IImageCard> = ({
    image,
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
                <div tw="mt-auto pt-5 flex justify-center gap-5">
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
