import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Elements/Button",
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        href: "",
        children: "Link",
    },
};

export const NavBarLink: Story = {
    args: {
        ...Default.args,
        navBarLink: true,
    },
};

export const NavBarBrand: Story = {
    args: {
        ...Default.args,
        navBarBrand: true,
    },
};

export const Pagination: Story = {
    args: {
        ...Default.args,
        paginationButton: true,
    },
};

export const ContainedPrimary: Story = {
    args: {
        ...Default.args,
        variant: "contained",
    },
};

export const ContainedSuccess: Story = {
    args: {
        ...Default.args,
        variant: "contained",
        color: "success",
    },
};

export const ContainedError: Story = {
    args: {
        ...Default.args,
        variant: "contained",
        color: "error",
    },
};
