import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderNavBar from './headerNavBar';

export default {
    title: 'Modules/HeaderNavBar',
    component: HeaderNavBar
} as ComponentMeta<typeof HeaderNavBar>;

const Template: ComponentStory<typeof HeaderNavBar> = (args) => <HeaderNavBar {...args}>Link</HeaderNavBar>;

export const Default = Template.bind({})

Default.args = {
    headerData: {
        siteTagLine: 'Tawa Christadelphians',
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
}