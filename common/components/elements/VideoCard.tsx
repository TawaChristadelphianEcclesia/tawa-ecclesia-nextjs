/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import * as React from "react";
import Image from "next/image";
import PlaySvg from "../assets/playIcon.svg";

export interface IVideoCard {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: IImageData;
}

const VideoCard: React.FC<IVideoCard> = ({
    image,
    title,
    subtitle,
    description,
    tags,
}) => (
    <div tw="max-w-xs lg:max-w-sm bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
        <div tw="aspect-w-3 aspect-h-2">
            <Image
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                {...image}
            />
            <div tw="w-full h-full opacity-50 text-gray-300 hover:backdrop-blur-sm focus:backdrop-blur-sm active:backdrop-blur-md hover:opacity-75 focus:opacity-75 active:opacity-90 transition-all rounded-t-lg">
                <PlaySvg tw="w-full h-full filter drop-shadow-lg" />
            </div>
        </div>
        <div tw="p-3 text-center overflow-ellipsis">
            <div tw="text-xl font-bold text-gray-900">{title}</div>
            <p tw="text-gray-900 font-sans font-semibold text-xs">
                {tags.join(" • ")}
            </p>
            <div tw="text-gray-500 italic mb-3">{subtitle}</div>
            <div tw="text-gray-900 overflow-ellipsis">{description}</div>
        </div>
    </div>
);

export default VideoCard;
