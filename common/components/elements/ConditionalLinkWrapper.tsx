/** @jsxImportSource @emotion/react */
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

interface IConditionalLinkWrapper {
    href?: string;
    passHref?: boolean;
    target?: string;
}

const ConditionalLinkWrapper: React.FC<IConditionalLinkWrapper> = ({
    href,
    passHref,
    children,
    target
}) => {
    return href ? (
        <Link href={href} passHref={passHref}>
            {!passHref ? <a target={target}>{children}</a> : <>{children}</>}
        </Link>
    ) : (
        <>{children}</>
    );
};

export default ConditionalLinkWrapper;
