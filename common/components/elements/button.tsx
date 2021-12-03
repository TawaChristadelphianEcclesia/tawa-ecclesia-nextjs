/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";

interface IButton {
    navBarLink?: boolean,
    navBarBrand?: boolean,
    href: string
}

const Button: React.FC<IButton> = ({ href, navBarLink, navBarBrand, children }) => (
    <Link href={href} passHref>
        <div 
            css={[
                tw`cursor-pointer font-sans inline-block`,
                navBarLink && tw`hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm text-gray-500 rounded-sm transition-all`,
                navBarBrand && tw`hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 text-gray-900 rounded text-2xl font-semibold transition-all`
            ]}
        >
            <a>
                {children}
            </a>
        </div>
    </Link>
);

export default Button;
