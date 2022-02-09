/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";
import { GlobalStyles } from "twin.macro";
import Seo, { ISeoData } from "../elements/Seo";
import HeaderNavBar, { IHeaderData } from "../modules/HeaderNavBar";
import Footer, { IFooterData } from "../modules/Footer";

export interface IGlobalData {
    headerData: IHeaderData;
    footerData: IFooterData;
}

interface IDefaultLayout {
    seo: ISeoData;
    global: IGlobalData
}



const DefaultLayout: React.FC<IDefaultLayout> = ({
    seo,
    global: {headerData, footerData},
    children,
    ...rest
}) => (
    <div {...rest} tw="min-h-screen flex flex-col">
        <GlobalStyles />
        <Seo {...seo} />
        <HeaderNavBar {...headerData} />
        {children}
        <Footer {...footerData} />
    </div>
);

export default DefaultLayout;
