import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./footer";

export default {
    title: "Modules/Footer",
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    footerText: "Footer Text",
    footerIcon: {
        url: "./bible_logo.svg",
        alt: "bible logo",
    },
    footerColumns: [
        {
            title: "title",
            links: [
                { url: "/", label: "Home" },
                { url: "/", label: "About Us" },
                { url: "/", label: "Our Beliefs" },
                { url: "/", label: "Articles" },
            ],
        },
        {
            title: "title",
            links: [
                { url: "/", label: "Home" },
                { url: "/", label: "About Us" },
                { url: "/", label: "Our Beliefs" },
                { url: "/", label: "Articles" },
            ],
        },
        {
            title: "title",
            links: [
                { url: "/", label: "Home" },
                { url: "/", label: "About Us" },
                { url: "/", label: "Our Beliefs" },
                { url: "/", label: "Articles" },
            ],
        },
    ],
};
