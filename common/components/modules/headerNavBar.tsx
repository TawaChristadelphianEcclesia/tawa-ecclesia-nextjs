/** @jsxImportSource @emotion/react */
import Image from "next/image";
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import Button from "../elements/button";
import HamburgerButton from "../elements/hamburgerButton";
import NavBarLogo from "../elements/navBarLogo";

interface ILinkData {
    label: string;
    url: string;
}
export interface IHeaderData {
    siteTagLine: string;
    siteLogo: IImageData;
    headerLinks: ILinkData[];
  }

const HeaderNavBar = ({ headerData }: { headerData: IHeaderData }) => {
  const [open, setOpen] = useState(false);
  return (
    <header tw="sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow">
      <div tw="flex items-center justify-between px-4 py-2 sm:p-0">
        <div tw="flex items-center">
          {/* <div tw="h-12 w-12 m-0 p-0 mx-2 relative">
            <Image
              src={headerData.siteLogo.url}
              alt={headerData.siteLogo.alt}
              sizes="100%"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
          <NavBarLogo logo={headerData.siteLogo}/>
          <Button href="/" navBarBrand>{headerData.siteTagLine}</Button>
        </div>
        <div tw="sm:hidden">
          <HamburgerButton open={open} setOpen={setOpen} />
        </div>
      </div>
      <div
        tw="px-4 pt-2 pb-4 sm:flex sm:p-0 transition-all"
        css={[open ? tw`block` : tw`hidden`]}
      >
        {headerData.headerLinks.map((link, index) => (
          <Button key={index} href={link.url} navBarLink>
            {link.label}
          </Button>
        ))}
      </div>
    </header>
  );
};
export default HeaderNavBar;
