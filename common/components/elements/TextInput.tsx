/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

interface ITextInput {
    type: string;
    placeholder: string;
}

const TextInput: React.FC<ITextInput> = ({ type, placeholder }) => (
    <input
        tw="block w-full p-2.5 rounded-xl border-gray-300 bg-gray-100 hocus:ring-2 outline-none transition duration-200 invalid:ring-red-300 invalid:ring-2"
        type={type}
        placeholder={placeholder}
    ></input>
);

export default TextInput;
