/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

const GradientContentContainer: React.FC = ({ children }) => (
    <div tw="bg-gradient-to-t from-gray-200 to-gray-50 py-10 px-2">
        <div tw="max-w-screen-sm mx-auto">{children}</div>
    </div>
);

export default GradientContentContainer;
