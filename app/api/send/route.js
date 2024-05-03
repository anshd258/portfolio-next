
import { Resend } from 'resend';
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        const data = await resend.emails.send({
            from: `Anshdeep <${fromEmail}>`,
            to: ['anshd258@gmail.com', email],
            subject: subject,
            react: (<>
                <h1>{subject}</h1>
                <h6>Thank you for contacting me!</h6>
                <p>Message Recieved :- </p>
                <p>{message}</p>
            </>),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
