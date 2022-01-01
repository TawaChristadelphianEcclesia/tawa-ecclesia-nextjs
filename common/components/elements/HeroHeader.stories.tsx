import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroHeader from "./HeroHeader";

export default {
    title: "Elements/Headers/Hero Header",
    component: HeroHeader,
} as ComponentMeta<typeof HeroHeader>;

const Template: ComponentStory<typeof HeroHeader> = (args) => (
    <HeroHeader {...args}>{args.children}</HeroHeader>
);

export const Default = Template.bind({});

Default.args = {
    title: "Tawa Christadelphians",
    subtitle:
        "The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
    image: "bible_photo.jpg",
    imageBlurDataURL: "bible_photo.jpg",
    alt: "alt text",
    textColor: "white",
};

Default.argTypes = {
    textPosition: {
        options: ["top", "bottom"],
        control: { type: "select" },
    },
};

// export const NavBarLink = Template.bind({})
// NavBarLink.args = {
//  ...Default.args,
//  navBarLink: true
// }

// export const NavBarBrand = Template.bind({})
// NavBarBrand.args = {
//  ...Default.args,
//  navBarBrand: true
// }
