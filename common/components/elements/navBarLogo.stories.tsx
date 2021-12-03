import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBarLogo from './navBarLogo';

export default {
    title: 'Elements/Nav Bar Logo',
    component: NavBarLogo,
    argTypes: { setOpen: { action: "clicked" } }
} as ComponentMeta<typeof NavBarLogo>;

const Template: ComponentStory<typeof NavBarLogo> = (args) => <NavBarLogo {...args} />;

export const Default = Template.bind({})
Default.args = {
    logo: {
        url: './bible_logo.svg',
        alt: "bible logo"
    }
}