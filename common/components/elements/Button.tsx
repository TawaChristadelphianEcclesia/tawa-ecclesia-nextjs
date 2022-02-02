/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import Link from "next/link";
import ConditionalLinkWrapper from "./ConditionalLinkWrapper";

interface IButton {
    navBarLink?: boolean;
    navBarBrand?: boolean;
    paginationButton?: boolean;
    color?: "success" | "error";
    variant?: "contained";
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<IButton> = ({
    href,
    onClick,
    navBarLink,
    navBarBrand,
    paginationButton,
    variant,
    color,
    children,
}) => (
    <ConditionalLinkWrapper href={href}>
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
                variant == "contained" && [
                    tw`px-4 py-2 uppercase text-sm text-white rounded-lg transition-all hover:shadow-md focus:shadow-md`,
                    color == undefined &&
                        tw`bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-700`,
                    color == "success" &&
                        tw`bg-green-400 hover:bg-green-500 focus:bg-green-500 active:bg-green-600`,
                    color == "error" &&
                        tw`bg-red-400 hover:bg-red-500 focus:bg-red-500 active:bg-red-600`,
                ],
                // primary &&
                //     tw`bg-blue-500 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg active:bg-blue-700 text-white px-4 py-2 uppercase text-sm rounded-lg transition-all`,
            ]}
        >
            {children}
        </div>
    </ConditionalLinkWrapper>
);

export default Button;
