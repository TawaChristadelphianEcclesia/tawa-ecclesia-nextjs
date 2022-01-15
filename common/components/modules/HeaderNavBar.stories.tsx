import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderNavBar from './HeaderNavBar';

export default {
    title: 'Modules/HeaderNavBar',
    component: HeaderNavBar
} as ComponentMeta<typeof HeaderNavBar>;

const Template: ComponentStory<typeof HeaderNavBar> = (args) => <HeaderNavBar {...args}>Link</HeaderNavBar>;

export const Default = Template.bind({})

Default.args = {
    siteTitle: 'Tawa Christadelphians',
    siteLogo: {
        url: '/bible_logo.svg',
        alt: 'logo'
    },
    headerLinks: [
        {
            url: "/articles",
            label: "Articles"
        },
        {
            url: "/articles/who-are-we",
            label: "Who Are We?"
        },
        {
            url: "/articles/gods-purpose-with-the-earth",
            label: "Our Beliefs"
        }
    ]
}