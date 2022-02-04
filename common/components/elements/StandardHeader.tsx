/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export interface IStandardHeader {
    title: string;
    summary?: string;
    image: IImageData;
}

const StandardHeader: React.FC<IStandardHeader> = ({
    title,
    summary,
    image,
}) => (
    <div tw="pt-8 max-w-screen-sm mx-auto px-5">
        <h1 tw="text-4xl font-medium font-serif pb-6">{title}</h1>
        <p tw="sm:text-xl text-gray-600 italic pb-6">
            {summary && <ReactMarkdown>{summary}</ReactMarkdown>}
        </p>
        {image && (
            <div
                tw="aspect-w-16 aspect-h-9 mb-6"
                style={{
                    position: "relative",
                }}
            >
                <Image
                    src={image.url}
                    alt={image.alt || ""}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={image.blurDataUrl}
                />
            </div>
        )}
    </div>
);

export default StandardHeader;
