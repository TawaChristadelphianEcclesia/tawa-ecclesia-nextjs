/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import Link from "next/link";
import ConditionalLinkWrapper from "./ConditionalLinkWrapper";

interface IButton {
    navBarLink?: boolean;
    navBarBrand?: boolean;
    paginationButton?: boolean;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<IButton> = ({
    href,
    onClick,
    navBarLink,
    navBarBrand,
    paginationButton,
    children,
}) => (
    <ConditionalLinkWrapper href={href} passHref>
        <div
            onClick={onClick}
            css={[
                tw`cursor-pointer font-sans inline-block`,
                navBarLink &&
                    tw`hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 hover:shadow focus:shadow px-4 py-2 uppercase text-sm text-gray-500 rounded-sm transition-all`,
                navBarBrand &&
                    tw`hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-gray-900 px-4 py-2 text-gray-900 rounded sm:text-2xl font-semibold transition-all`,
                paginationButton &&
                    tw`hover:bg-blue-300 focus:bg-blue-300 active:bg-blue-500 hover:text-white focus:text-white active:text-white hover:shadow-md focus:shadow-md px-4 py-2 uppercase text-sm text-gray-700 rounded-lg transition-all`,
            ]}
        >
            <a>{children}</a>
        </div>
    </ConditionalLinkWrapper>
);

export default Button;
