/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

interface IContentSection {
    padTop?: boolean;
    padBottom?: boolean;
    children?: ReactNode;
}

const ContentSection: React.FC<IContentSection> = ({
    padTop,
    padBottom,
    children,
}) => (
    <div tw="px-2" css={[padTop && tw`pt-10`, padBottom && tw`pb-10`]}>
        <div tw="max-w-screen-sm mx-auto">{children}</div>
    </div>
);

export default ContentSection;
