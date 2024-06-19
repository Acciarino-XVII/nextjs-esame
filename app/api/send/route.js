//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import {NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'karim <acciarino2005@gmail.com>',
      to: ['karimacciaro@gmail.com'],
      subject: 'Hello world',
      react: <>
                <p>
                    Emailvody
                </p>
            </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
