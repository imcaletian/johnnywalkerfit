import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../component/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json()
    console.log("body", body)
    const { email, name, message } = body;
    const data = await resend.emails.send({
        from: "John Walker <johnny@updates.johnnywalkersfitness.com>",
        to: email,
        bcc: ['johndavidwalker@hotmail.com'],
        subject: "Thank you for contacting Johnny Walker's Fitness!",
        react: EmailTemplate ({firstName: name, message: message}),
    });

    if (data.status === 'success') {
        console.log(data)
        return NextResponse.json({ message: 'Email Sucessfully Sent!' })
    }
    return NextResponse.json(data)
} catch (error) {
    console.log ('error', error)
}}