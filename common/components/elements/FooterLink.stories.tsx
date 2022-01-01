import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FooterLink from './FooterLink';

export default {
    title: 'Elements/Footer Link',
    component: FooterLink
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => <FooterLink {...args} />;

export const Default = Template.bind({})
Default.args = {
    label: "link",
    url: "link"
}