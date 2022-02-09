/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";
interface ICard {
    animate?: boolean;
}
const Card: React.FC<ICard> = ({ animate, children }) => (
    <div
        tw="bg-white rounded-2xl border-gray-100 border shadow-xl px-5 py-5"
        css={[animate && tw`transform transition duration-300 hover:scale-105`]}
    >
        {children}
    </div>
);

export default Card;
