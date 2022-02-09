import React from "react";
// import { RichText } from "prismic-reactjs";
import tw from "twin.macro";
import { IFooterData } from "../lib/api";
import Link from "next/link";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

const FooterLink: React.FC<{ label: string; url: string }> = ({
    label,
    url,
}) => {
    return (
        <li>
            <Link href={url}>
                <a tw="text-gray-400 cursor-pointer hover:text-gray-500">
                    {label}
                </a>
            </Link>
        </li>
    );
};

const Footer: React.FC<{ footerData: IFooterData }> = ({ footerData }) => {
    return (
        <div tw="w-full bg-gray-800">
            <div tw="max-w-screen-sm mx-auto divide-y divide-gray-400">
                <div tw="px-4">
                    <ul tw="space-y-4 py-4">
                        <FooterLink url={"/"} label={"Home"} />
                        {footerData.footerLinks.map((link, index) => (
                            <FooterLink
                                url={link.url}
                                label={link.label}
                                key={index}
                            />
                        ))}
                    </ul>
                </div>
                <div tw="text-gray-400 flex items-center py-8 px-4">
                    <div tw="h-12 w-12 m-0 p-0 mr-8 relative">
                        <Image
                            src={footerData.footerIcon.src}
                            alt={footerData.footerIcon.alt}
                            priority
                            sizes="100%"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    {RichText.render(footerData.footerText)}
                </div>
            </div>
        </div>
    );
};

export default Footer;
