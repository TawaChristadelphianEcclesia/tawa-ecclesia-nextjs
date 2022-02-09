/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

export interface ITextHeader {
    title: string;
    subtitle: string;
}

const TextHeader: React.FC<ITextHeader> = ({ title, subtitle }) => (
    <div tw="my-10 sm:my-16">
        <h1 tw="font-bold text-4xl text-gray-900">{title}</h1>
        <p tw="text-xl text-gray-700">{subtitle}</p>
    </div>
);

export default TextHeader;
