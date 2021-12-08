/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import tw, { css, styled } from "twin.macro";

interface IHamburgerButton {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerButton: React.FC<IHamburgerButton> = ({open, setOpen}) => {
    return (
        <button
            type="button"
            aria-label="expand menu"
            css={tw`block text-gray-400 hover:text-gray-900 focus:text-gray-900 focus:outline-none rounded focus:ring focus:ring-blue-300 transition-all`}
            onClick={() => setOpen(!open)}
        >
            <svg tw="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {open && (
                    <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                )}
                {!open && (
                    <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                )}
            </svg>
        </button>
    )
}

export default HamburgerButton;