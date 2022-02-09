import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterLinkColumn from './FooterLinkColumn';

export default {
    title: 'Elements/Footer Link Column',
    component: FooterLinkColumn
} as ComponentMeta<typeof FooterLinkColumn>;

const Template: ComponentStory<typeof FooterLinkColumn> = (args) => <FooterLinkColumn {...args} />;

export const Default = Template.bind({})
Default.args = {
    title: "title",
    links: [
        { url: "/", label: "Home" },
        { url: "/", label: "About Us" },
        { url: "/", label: "Our Beliefs" },
        { url: "/", label: "Articles" },
    ], 
}