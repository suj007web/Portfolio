import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ThankYouEmail from '@/components/ThankYouEmail'; // Add this import

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    console.log('Received form data:', { name, email, subject, message });

    // Send thank you email to the user
    const thankYouEmail = await resend.emails.send({
      from: 'Sujal Chauhan <noreply@sujalchauhan.in>',
      to: [email],
      subject: 'Thank you for contacting me!',
      react: ThankYouEmail({ name }),
    });

    // Send form data to your email
    const formDataEmail = await resend.emails.send({
      from: 'Contact Form <noreply@sujalchauhan.in>',
      to: ['chauhansujal1107@gmail.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('Thank you email sent:', thankYouEmail);
    console.log('Form data email sent:', formDataEmail);

    return NextResponse.json({ success: true, data: { thankYouEmail, formDataEmail } });
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'An unknown error occurred'
    }, { status: 500 });
  }
}
