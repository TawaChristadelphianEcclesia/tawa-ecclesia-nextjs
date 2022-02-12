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
    const handleSubmit = async () => {
        if (status !== "sent") {
            setStatus("sending");
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            response.status == 200 ? setStatus("sent") : setStatus("error");
        }
    };
    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();
    // const [statusMessage, setStatusMessage] = useState<string>("send");
    const [status, setStatus] =
        useState<"ready" | "sending" | "sent" | "error">("ready");
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
                <div tw="w-full grid justify-items-end pt-5">
                    <Button
                        onClick={handleSubmit}
                        color={
                            status == "error"
                                ? "error"
                                : status == "sent"
                                ? "success"
                                : undefined
                        }
                        variant="contained"
                    >
                        {status == "ready"
                            ? "Send"
                            : status == "sending"
                            ? "Sending..."
                            : status == "sent"
                            ? "Sent!"
                            : "Error :("}
                    </Button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
