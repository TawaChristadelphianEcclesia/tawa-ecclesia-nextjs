/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";

const Card: React.FC = ({ children }) => (
    <div tw="bg-white rounded-lg shadow-xl px-5 py-5 mb-5 sm:mb-10">
        {children}
    </div>
);

export default Card;
