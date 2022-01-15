/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState } from "react";
import tw, { css, styled } from "twin.macro";
import Button from "./Button";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

export interface IContactForm {
    endpoint: string;
    title: string;
}

const ContactForm: React.FC<IContactForm> = ({ endpoint, title }) => {
    const handleSubmit = () => {
        fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });
    };
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();
    return (
        <>
            <h2 tw="text-gray-900 text-4xl mb-5">{title}</h2>
            <form tw="space-y-2.5">
                <TextInput
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    setValue={setName}
                />
                <TextInput
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    setValue={setEmail}
                />
                <TextArea
                    placeholder="Message"
                    value={message}
                    setValue={setMessage}
                />
                <Button onClick={handleSubmit}>Send</Button>
            </form>
        </>
    );
};

export default ContactForm;
