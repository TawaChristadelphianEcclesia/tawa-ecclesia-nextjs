import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeroHeader from "./HeroHeader";

const meta: Meta<typeof HeroHeader> = {
    title: "Elements/Headers/Hero Header",
    component: HeroHeader,
};
export default meta;

type Story = StoryObj<typeof HeroHeader>;

export const Default: Story = {
    args: {
        title: "Tawa Christadelphians",
        subtitle:
            "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
        image: {
            src: "bible_photo.jpg",
            blurDataURL: "bible_photo.jpg",
            alt: "alt text",
        },
        textColor: "white",
    },
    argTypes: {
        textPosition: {
            options: ["top", "bottom"],
            control: { type: "select" },
        },
    },
};

// export const NavBarLink: Story = {
//   args: {
//     ...Default.args,
//     navBarLink: true,
//   },
// };

// export const NavBarBrand: Story = {
//   args: {
//     ...Default.args,
//     navBarBrand: true,
//   },
// };
