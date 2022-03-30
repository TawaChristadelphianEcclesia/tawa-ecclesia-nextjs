/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
import FooterLinkColumnGroup, {
    IFooterColumnGroup,
} from "../elements/FooterLinkColumnGroup";
import FooterText from "../elements/FooterText";
import { IFooterLinkColumn } from "../elements/FooterLinkColumn";
import InstagramIcon from "../assets/instagram.svg";
import FacebookIcon from "../assets/facebook.svg";
import YouTubeIcon from "../assets/youtube.svg";
import ConditionalLinkWrapper from "../elements/ConditionalLinkWrapper";

export interface IFooterData {
    footerText: string;
    footerColumns: IFooterLinkColumn[];
    footerIcon?: IImageData;
    faceBookLink?: string;
    youTubeLink?: string;
    instagramLink?: string;
}

// export interface IFooterDat

const Footer: React.FC<IFooterData> = ({
    footerText,
    footerColumns,
    footerIcon,
    faceBookLink,
    youTubeLink,
    instagramLink,
}) => {
    return (
        <div tw="w-full bg-gray-800 mt-auto">
            <div tw="max-w-screen-sm mx-auto divide-y divide-gray-400">
                <div tw="py-8 px-4">
                    <FooterLinkColumnGroup footerColumns={footerColumns} />
                </div>
                <div tw="py-8 px-4 flex flex-col sm:flex-row items-center">
                    <div tw="sm:ml-auto">
                        <FooterText text={footerText} icon={footerIcon} />
                    </div>
                    <div tw="flex items-center sm:mr-auto">
                        {faceBookLink && (
                            <ConditionalLinkWrapper href={faceBookLink}>
                                <div>
                                    <FacebookIcon tw="h-8 text-gray-300" />
                                </div>
                            </ConditionalLinkWrapper>
                        )}
                        {youTubeLink && (
                            <ConditionalLinkWrapper href={youTubeLink}>
                                <div>
                                    <YouTubeIcon tw="h-8 text-gray-300" />
                                </div>
                            </ConditionalLinkWrapper>
                        )}
                        {instagramLink && (
                            <ConditionalLinkWrapper href={instagramLink}>
                                <div>
                                    <InstagramIcon tw="h-8 text-gray-300" />
                                </div>
                            </ConditionalLinkWrapper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
