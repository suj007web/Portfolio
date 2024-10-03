import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ThankYouEmail from '@/components/ThankYouEmail'; // Add this import

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log('Received form data:', { name, email, subject, message });

    const data = await resend.emails.send({
      from: 'Sujal Chauhan <noreply@sujalchauhan.in>',
      to: [email],
      subject: 'Thank you for contacting me!',
      react: ThankYouEmail({ name }),
    });

    console.log('Resend API response:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unknown error occurred'
    }, { status: 500 });
  }
}
