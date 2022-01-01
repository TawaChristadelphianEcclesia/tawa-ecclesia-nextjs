/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Button from "./Button";

interface IArticlePagination {}

const ArticlePagination: React.FC<IArticlePagination> = () => (
    <div tw="w-full grid place-items-center">
        <div>
            <Button paginationButton>Previous</Button>
            <Button paginationButton>1</Button>
            <Button paginationButton>2</Button>
            <Button paginationButton>3</Button>
            <Button paginationButton>4</Button>
            <Button paginationButton>5</Button>
            <Button paginationButton>6</Button>
            <Button paginationButton>Next</Button>
        </div>
    </div>
);

export default ArticlePagination;
