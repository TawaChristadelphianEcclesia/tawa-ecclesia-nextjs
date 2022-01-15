/** @jsxImportSource @emotion/react */
import React from "react";
import Image from "next/image";
import tw from "twin.macro";

interface IFooterText {
    icon?: IImageData;
    text: string;
}

const FooterText: React.FC<IFooterText> = ({ icon, text }) => {
    return (
        <div tw="text-gray-400 flex items-center py-8 px-4">
            <div tw="h-12 w-12 m-0 p-0 mr-8 relative">
                {icon && (
                    <Image
                        src={icon.url}
                        alt={icon.alt}
                        sizes="100%"
                        layout="fill"
                        objectFit="contain"
                    />
                )}
            </div>
            {text}
        </div>
    );
};

export default FooterText;
