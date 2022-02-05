/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import Link from "next/link";

export interface IArticleCard {
    url: string;
    title: string;
    titleImage: IImageData;
    summary: string;
    tags: string[];
    datePublished: Date;
    readingTime: number;
}

const ArticleCard: React.FC<IArticleCard> = ({
    url,
    title,
    titleImage,
    summary,
    tags,
    datePublished,
    readingTime,
}) => (
    <Link href={url} passHref>
        <a>
            <div tw="flex cursor-pointer">
                <div tw="flex-1 p-1 pl-3 border border-gray-200 rounded-l-md">
                    <h3 tw="text-gray-900 font-sans text-lg sm:text-xl font-bold">
                        {title}
                    </h3>
                    <p tw="text-gray-900 font-sans font-semibold text-xs">
                        {tags.join(" • ")}
                    </p>
                    <p tw="text-gray-500 text-sm">
                        {readingTime} Minute Read •{" "}
                        {Intl.DateTimeFormat("en-nz").format(datePublished)}
                    </p>
                    <p tw="font-sans text-sm my-2">
                        {summary?.length < 120
                            ? summary
                            : summary.substring(0, 120) + "..."}
                    </p>
                </div>
                <div tw="flex-initial w-48 justify-self-end hidden sm:block">
                    <div tw="aspect-w-3 aspect-h-2">
                        <Image
                            src={titleImage.src}
                            alt={titleImage.alt || ""}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={titleImage.blurDataURL}
                        />
                    </div>
                </div>
            </div>
        </a>
    </Link>
);

export default ArticleCard;
