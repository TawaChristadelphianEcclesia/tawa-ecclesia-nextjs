import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HamburgerButton from './HamburgerButton';

export default {
    title: 'Elements/Hamburger Button',
    component: HamburgerButton,
    argTypes: { setOpen: { action: "clicked" } }
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => <HamburgerButton {...args} />;

export const Open = Template.bind({})
Open.args = {
    open: true
}

export const Closed = Template.bind({})
Closed.args = {
    open: false
}