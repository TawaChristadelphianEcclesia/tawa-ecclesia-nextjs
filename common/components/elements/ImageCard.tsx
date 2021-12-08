/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";

interface IImageCard {
    src: string;
    blurDataUrl?: string;
    alt: string;
}

const ImageCard: React.FC<IImageCard> = ({ src, alt, blurDataUrl }) => (
    <div>
        <div tw="flex-initial w-48 justify-self-end pl-4 hidden sm:block">
            <div tw="aspect-w-3 aspect-h-2">
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    // placeholder="blur"
                    // blurDataURL={blurDataUrl}
                />
            </div>
        </div>
    </div>
);

export default ImageCard;
