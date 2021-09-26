import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import { getHeaderData, IHeaderData } from "../lib/headerFooter";
import { RichText } from "prismic-reactjs";

const NavLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm block text-gray-500 rounded-sm transition-all cursor-pointer">
      {children}
    </a>
  </Link>
);
const HeaderNavBar = ({ headerData }: { headerData: IHeaderData }) => {
  const [open, setOpen] = useState(false);
  return (
    <header tw="sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow">
      <div tw="flex items-center justify-between px-4 py-2 sm:p-0">
        <div tw="flex items-center">
          {/* <img src={LogoBible} tw="h-12 m-0 p-0 px-2" alt="bible logo" /> */}
          <div tw="h-12 w-12 m-0 p-0 mx-2 relative">
            <Image
              src={headerData.siteLogo.url}
              alt={headerData.siteLogo.alt}
              sizes="100%"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/" passHref>
            <a tw="hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 block text-gray-900 rounded text-2xl font-semibold transition-all">
              <h1>{RichText.asText(headerData.siteTagLine)}</h1>
            </a>
          </Link>
        </div>
        <div tw="sm:hidden">
          <button
            type="button"
            aria-label="expand menu"
            tw="block text-gray-400 hover:text-gray-900 focus:text-gray-900 transition-all focus:outline-none rounded focus:ring focus:ring-blue-300"
            onClick={() => setOpen(!open)}
          >
            <svg tw="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!open && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        tw="px-4 pt-2 pb-4 sm:flex sm:p-0 transition-all"
        css={[open ? tw`block` : tw`hidden`]}
      >
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/articles/who-are-we">Who Are We?</NavLink>
        <NavLink href="/articles/gods-purpose-with-the-earth">
          Our Beliefs
        </NavLink>
      </div>
    </header>
  );
};
export default HeaderNavBar;
