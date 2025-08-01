import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, type } = await request.json();
  
  try {
    await resend.emails.send({
      from: String(process.env.EMAIL_FROM),
      to: String(process.env.EMAIL_TO),
      subject: type === 'booking' ? 'New Booking Request' : 'New Inquiry',
      html: `
        <h2>${type === 'booking' ? 'Booking Request' : 'Inquiry'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}