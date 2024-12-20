/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import FooterLinkColumn, { IFooterLinkColumn } from "./FooterLinkColumn";

export interface IFooterColumnGroup {
    footerColumns: IFooterLinkColumn[];
}

const FooterLinkColumnGroup: React.FC<IFooterColumnGroup> = ({
    footerColumns,
}) => {
    return (
        <ul tw="grid justify-items-center sm:justify-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 w-full">
            {footerColumns.map(({ title, links }, index) => (
                <FooterLinkColumn title={title} links={links} key={index} />
            ))}
        </ul>
    );
};

export default FooterLinkColumnGroup;
