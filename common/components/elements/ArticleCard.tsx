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
    <div tw="hover:shadow-2xl hover:scale-105 border border-white hover:border-gray-50 rounded-md transition duration-300 overflow-hidden bg-white">
        <Link href={url} passHref>
            <a>
                <div tw="flex cursor-pointer">
                    <div tw="flex-1 ml-2">
                        <h3 tw="text-gray-900 font-sans text-xl font-bold">
                            {title}
                        </h3>
                        <p tw="text-gray-900 font-sans font-semibold text-xs">
                            {tags.join(" • ")}
                        </p>
                        <p tw="text-gray-500 text-sm">
                            {readingTime} Minute Read •{" "}
                            {Intl.DateTimeFormat("en-nz").format(datePublished)}
                        </p>
                        <p tw="font-sans text-sm">
                            {summary?.length < 120
                                ? summary
                                : summary.substring(0, 120) + "..."}
                        </p>
                    </div>
                    <div tw="flex-initial w-48 justify-self-end pl-4 hidden sm:block">
                        <div tw="aspect-w-3 aspect-h-2">
                            <Image
                                src={titleImage.url}
                                alt={titleImage.url || ""}
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
    </div>
);

export default ArticleCard;
