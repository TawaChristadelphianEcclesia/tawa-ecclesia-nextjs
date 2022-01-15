import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const email = process.env.SENDGRID_DESTINATION_EMAIL || "";
        const msg = {
            to: email,
            from: email,
            subject: `Contact Form Submission from ${req.body.name}`,
            html: `Name: ${req.body.name}<br>Email: ${req.body.email}<br><br>${req.body.message}`,
        };
        const result = await sgMail.send(msg);
        res.status(200).json({ result });
    } catch (err: any) {
        console.debug(err.response.body);
        res.status(500).json({ error: "failed to send message" });
    }
}
