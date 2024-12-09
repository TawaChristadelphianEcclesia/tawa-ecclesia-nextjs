/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

const ArticleCardWrapper: React.FC<{ children?: React.ReactNode }> = ({
    children,
}) => (
    <div tw="shadow-md hover:shadow-2xl hover:scale-105 rounded-md transition duration-300 overflow-hidden bg-white">
        {children}
    </div>
);

export default ArticleCardWrapper;
