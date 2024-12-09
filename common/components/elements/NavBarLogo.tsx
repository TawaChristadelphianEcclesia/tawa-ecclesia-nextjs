/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import ConditionalLinkWrapper from "./ConditionalLinkWrapper";

interface INavBarLogo {
    logo: IImageData;
    href?: string;
}

const NavBarLogo: React.FC<INavBarLogo> = ({ logo, href }) => {
    return (
        <ConditionalLinkWrapper href={href}>
            <div tw="h-12 w-12 m-0 p-0 mx-2 relative">
                <Image
                    src={logo.src}
                    alt={logo.alt || ""}
                    sizes="100%"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </ConditionalLinkWrapper>
    );
};

export default NavBarLogo;
