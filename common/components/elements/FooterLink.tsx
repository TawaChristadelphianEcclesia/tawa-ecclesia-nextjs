/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import tw from "twin.macro";

export interface ILinkData {
    label: string;
    url: string;
}

const FooterLink: React.FC<ILinkData> = ({
    label,
    url,
  }) => {
    return (
      <li>
        <Link href={url}>
          <a tw="text-gray-400 cursor-pointer hover:text-gray-500">{label}</a>
        </Link>
      </li>
    );
  };

export default FooterLink;