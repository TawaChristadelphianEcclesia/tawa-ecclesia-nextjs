/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

const Gradient: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div tw="bg-gradient-to-t from-gray-200 to-gray-50">{children}</div>
);

export default Gradient;
