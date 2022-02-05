/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";

export interface IHeroHeader {
    title: string | ReactNode;
    subtitle: string | ReactNode;
    image: IImageData;
    textColor?: string;
    textPosition?:
        | "topleft"
        | "topcenter"
        | "topright"
        | "middleleft"
        | "middlecenter"
        | "middleright"
        | "bottomleft"
        | "bottomcenter"
        | "bottomright";
}

const HeroHeader: React.FC<IHeroHeader> = ({
    title,
    subtitle,
    image,
    textColor,
    textPosition,
}) => {
    return (
        <div
            style={{
                position: "relative",
                width: `100%`,
                marginLeft: 0,
                marginRight: 0,
                // marginBottom: `1.45rem`,
                height: "60vh",
                overflow: "hidden",
            }}
        >
            <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                sizes="100%"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                priority
            />
            <div
                style={{
                    position: "absolute",
                    margin: "20px",
                    color: textColor,
                    ...(!textPosition ||
                    textPosition == "topcenter" ||
                    textPosition == "topleft" ||
                    textPosition == "topright"
                        ? { top: 0 }
                        : { bottom: 0 }),
                }}
            >
                <h1 tw="text-3xl sm:text-5xl lg:text-7xl font-bold font-serif">
                    {title}
                </h1>
                <p tw="text-lg sm:text-2xl lg:text-4xl">{subtitle}</p>
            </div>
        </div>
    );
};

export default HeroHeader;
