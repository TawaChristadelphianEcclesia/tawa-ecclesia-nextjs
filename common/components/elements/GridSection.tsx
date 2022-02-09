/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import * as React from "react";

interface IGridSection {
    padTop?: boolean;
    padBottom?: boolean;
}

const GridSection: React.FC<IGridSection> = ({
    padTop,
    padBottom,
    children,
}) => (
    <div
        tw="mx-auto max-w-screen-xl"
        css={[padTop && tw`pt-10`, padBottom && tw`pb-10`]}
    >
        <div tw="flex flex-wrap justify-evenly gap-10">{children}</div>
    </div>
);

export default GridSection;
