import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterText from './FooterText';

export default {
    title: 'Elements/Footer Text Section',
    component: FooterText
} as ComponentMeta<typeof FooterText>;

const Template: ComponentStory<typeof FooterText> = (args) => <FooterText {...args} />;

export const Default = Template.bind({})
Default.args = {
    text: "Footer Text",
    icon: {
        url: "./bible_logo.svg",
        alt: "bible logo",
    }
}