import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './button';

export default {
    title: 'Elements/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Link</Button>;

export const Default = Template.bind({})
Default.args = {
 href: ""
}

export const NavBarLink = Template.bind({})
NavBarLink.args = {
 ...Default.args,
 navBarLink: true
}

export const NavBarBrand = Template.bind({})
NavBarBrand.args = {
 ...Default.args,
 navBarBrand: true
}