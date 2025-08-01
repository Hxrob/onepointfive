import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, type } = await request.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email format' }, { status: 400 });
    }
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return Response.json({ error: 'Email service not configured' }, { status: 500 });
    }
    
    // Check if email addresses are configured
    if (!process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
      console.error('EMAIL_FROM or EMAIL_TO is not configured');
      return Response.json({ error: 'Email addresses not configured' }, { status: 500 });
    }
    
    const result = await resend.emails.send({
      from: String(process.env.EMAIL_FROM),
      to: String(process.env.EMAIL_TO),
      subject: type === 'booking' ? 'New Booking Request' : 'New Inquiry',
      html: `
        <h2>${type === 'booking' ? 'Booking Request' : 'Inquiry'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Type:</strong> ${type || 'inquiry'}</p>
        <hr>
        <p><em>This message was sent from the One Point Five Hotel website.</em></p>
      `
    });
    
    console.log('Email sent successfully:', result);
    return Response.json({ success: true });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}