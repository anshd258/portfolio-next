import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req) {
  const apiKey = process.env.RESEND_KEY;
  const fromEmail = process.env.FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      { error: { message: "Email service is not configured." } },
      { status: 503 }
    );
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: { message: "Invalid request body." } },
      { status: 400 }
    );
  }

  const { email, subject, message } = payload || {};
  if (!email || !message) {
    return NextResponse.json(
      { error: { message: "Email and message are required." } },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const data = await resend.emails.send({
      from: `Anshdeep <${fromEmail}>`,
      to: ["anshd258@gmail.com", email],
      subject: subject || "Hello from your portfolio",
      react: (
        <>
          <h1>{subject || "Hello"}</h1>
          <p>Thanks for reaching out — I&rsquo;ll reply within a day.</p>
          <p>Your message:</p>
          <blockquote>{message}</blockquote>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: { message: error?.message || "Send failed." } },
      { status: 500 }
    );
  }
}
