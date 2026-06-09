import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', //domaine
      to: ['aleyanlyov02282004@gmail.com','theo.delaudedu59@gmail.com'],
      subject: 'Nouveau projet depuis le site',
      text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}