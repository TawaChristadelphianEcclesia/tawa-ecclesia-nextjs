/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";

interface ITextArea {
    placeholder: string;
    value?: string | undefined;
    setValue?: (value: string | undefined) => any;
}

const TextArea: React.FC<ITextArea> = ({ placeholder, value, setValue }) => (
    <textarea
        tw="block w-full p-2.5 rounded-xl border-gray-300 bg-gray-100 hocus:ring-2 outline-none transition duration-200 invalid:ring-red-300 invalid:ring-2"
        placeholder={placeholder}
        value={value}
        onChange={setValue ? (e) => setValue(e.target.value) : undefined}
    />
);

export default TextArea;
