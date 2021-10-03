import React, { ReactNode } from "react";
// import { Link } from 'gatsby';
import Link from "next/link";
import Image from "next/image";
import "twin.macro";
import tw from "twin.macro";

interface IArticleListEntry {
  url: string;
  title: string;
  titleImage: IImageData;
  summary: string;
  tags: string[];
  datePublished: Date;
  readingTime: number;
}

const ArticleListEntry: React.FC<IArticleListEntry> = ({
  url,
  title,
  titleImage,
  summary,
  tags,
  datePublished,
  readingTime,
}) => {
  // slug link
  return (
    <Link href={url} passHref>
      <a>
        <div tw="flex border-gray-300 cursor-pointer m-4">
          <div tw="flex-1">
            <h3 tw="text-gray-900 font-sans text-xl font-bold">{title}</h3>
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
              />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleListEntry;
