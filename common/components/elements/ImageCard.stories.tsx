/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImageCard from "./ImageCard";
import Card from "./Card";

const meta: Meta<typeof ImageCard> = {
    title: "Elements/Image Card",
    component: ImageCard,
};
export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
    args: {
        image: {
            src: "undraw_podcast.svg",
            blurDataURL: "undraw_podcast.svg",
            alt: "postcast illustration",
        },
        title: "Podcast",
        body: "Interested in the truth of the bible? Join us as we discuss a range of biblical topics.",
        children: (
            <>
                <h2 tw="text-gray-900 font-bold text-2xl">Podcast</h2>
                <p>
                    Interested in the truth of the bible? Join us as we discuss
                    a range of biblical topics.
                </p>
            </>
        ),
    },
};
