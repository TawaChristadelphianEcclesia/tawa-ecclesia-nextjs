/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import Image from "next/image";

interface INavBarLogo {
    logo: IImageData
}

const NavBarLogo: React.FC<INavBarLogo> = ({logo}) => {
    return(          
    <div tw="h-12 w-12 m-0 p-0 mx-2 relative">
        <Image
        src={logo.url}
        alt={logo.alt}
        sizes="100%"
        layout="fill"
        objectFit="contain"
        />
    </div>)
}

export default NavBarLogo