import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
    title: "Elements/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = {
    href: "",
    children: "Link",
};

export const NavBarLink = Template.bind({});
NavBarLink.args = {
    ...Default.args,
    navBarLink: true,
};

export const NavBarBrand = Template.bind({});
NavBarBrand.args = {
    ...Default.args,
    navBarBrand: true,
};

export const Pagination = Template.bind({});
Pagination.args = {
    ...Default.args,
    paginationButton: true,
};

export const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
    ...Default.args,
    variant: "contained",
};
export const ContainedSuccess = Template.bind({});
ContainedSuccess.args = {
    ...Default.args,
    variant: "contained",
    color: "success",
};
export const ContainedError = Template.bind({});
ContainedError.args = {
    ...Default.args,
    variant: "contained",
    color: "error",
};
