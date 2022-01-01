import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterLinkColumnGroup from './FooterLinkColumnGroup';

export default {
    title: 'Elements/Footer Column Group',
    component: FooterLinkColumnGroup
} as ComponentMeta<typeof FooterLinkColumnGroup>;

const Template: ComponentStory<typeof FooterLinkColumnGroup> = (args) => <FooterLinkColumnGroup {...args} />;

export const Default = Template.bind({})
Default.args = {
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
    ]
}