/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import FooterLinkColumnGroup, { IFooterColumnGroup } from "../elements/footerLinkColumnGroup";
import FooterText from "../elements/footerText";
import { IFooterLinkColumn } from "../elements/footerLinkColumn";

export interface IFooterData {
    footerText: string;
    footerColumns: IFooterLinkColumn[];
    footerIcon: IImageData;
}

const Footer: React.FC<IFooterData> = ({
    footerText,
    footerColumns,
    footerIcon,
}) => {
    return (
        <div tw="w-full bg-gray-800">
            <div tw="max-w-screen-sm mx-auto divide-y divide-gray-400">
                <FooterLinkColumnGroup footerColumns={footerColumns} />
                <FooterText text={footerText} icon={footerIcon} />
            </div>
        </div>
    );
};

export default Footer;
