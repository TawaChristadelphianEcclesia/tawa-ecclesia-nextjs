/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageCard from "./ImageCard";
import Card from "./Card";

export default {
    title: "Elements/Image Card",
    component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
    <Card>
        <ImageCard {...args}>{args.children}</ImageCard>
    </Card>
);

export const Default = Template.bind({});

Default.args = {
    src: "undraw_podcast.svg",
    alt: "postcast illustration",
    title: "Podcast",
    body: "Interested in the truth of the bible? Join us as we discuss a range of biblical topics.",
    children: (
        <>
            <h2 tw="text-gray-900 font-bold text-2xl">Podcast</h2>
            <p>
                Interested in the truth of the bible? Join us as we discuss a
                range of biblical topics.
            </p>
        </>
    ),
};
