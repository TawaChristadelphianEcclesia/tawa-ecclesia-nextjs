import React, { ReactNode } from "react";
// import { Link } from 'gatsby';
import Link from "next/link";
import "twin.macro";
import tw from "twin.macro";

interface IArticleListEntry {
  url: string;
  title: string;
  summary: string | ReactNode;
  isLast?: boolean;
  tags: string[];
  datePublished: Date;
  readingTime: number;
}

const ArticleListEntry: React.FC<IArticleListEntry> = ({
  url,
  title,
  summary,
  tags,
  datePublished,
  readingTime,
  isLast = false,
}) => {
  // slug link
  return (
    <Link href={url} passHref>
      <div
        tw="px-4 py-2 border-gray-300 cursor-pointer"
        css={[!isLast && tw`border-b`]}
      >
        <p tw="text-gray-900 font-sans font-semibold text-xs">
          {tags.join(" • ")}
          {/* Basics • The Kingdom */}
        </p>
        <div>
          <h3 tw="text-gray-900 font-sans text-xl font-bold">{title}</h3>
          <p tw="text-gray-500 text-sm">
            {readingTime} Minute Read •{" "}
            {Intl.DateTimeFormat("en-nz").format(datePublished)}
          </p>
          <p tw="font-sans text-sm">{summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleListEntry;
