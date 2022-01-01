/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import TextInput from "./TextInput";

interface IContactForm {}

const ContactForm: React.FC<IContactForm> = () => (
    <>
        <h2 tw="text-gray-900 text-4xl mb-5">Contact Us</h2>
        <form tw="space-y-2.5">
            <TextInput type="text" placeholder="Your Name" />
            <TextInput type="email" placeholder="Your Email" />
        </form>
    </>
);

export default ContactForm;
