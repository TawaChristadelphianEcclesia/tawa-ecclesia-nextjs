/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";

interface IImageCard {
    src: string;
    blurDataUrl?: string;
    alt: string;
}

const ImageCard: React.FC<IImageCard> = ({
    src,
    alt,
    blurDataUrl,
    children,
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
        <div tw="flex-1">{children}</div>
    </div>
);

export default ImageCard;
