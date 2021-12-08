/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import tw from "twin.macro";
import FooterLink, { ILinkData } from "./FooterLink";

export interface IFooterLinkColumn {
    title: string;
    links: ILinkData[];
}

const FooterLinkColumn: React.FC<IFooterLinkColumn> = ({ title, links }) => {
    return (
        <li tw="space-y-2 py-4">
                <h2 tw="uppercase text-gray-200 tracking-wide font-semibold">
                    {title}
                </h2>
                <ul tw="space-y-2">
                    {links.map((link, index) => (
                        <FooterLink
                            url={link.url}
                            label={link.label}
                            key={index}
                        />
                    ))}
                </ul>
        </li>
    );
};

export default FooterLinkColumn;
