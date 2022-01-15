/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

interface IConditionalLinkWrapper {
    href?: string;
    passHref?: boolean;
}

const ConditionalLinkWrapper: React.FC<IConditionalLinkWrapper> = ({
    href,
    passHref,
    children,
}) => {
    console.log(href);
    console.log("conditional link wrapper");
    return href ? (
        <Link href={href} passHref={passHref}>
            {!passHref ? <a>{children}</a> : <>{children}</>}
        </Link>
    ) : (
        <>{children}</>
    );
};

export default ConditionalLinkWrapper;
