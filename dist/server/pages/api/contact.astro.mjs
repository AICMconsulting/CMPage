import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "contactos@cmconsulting.com.co",
    pass: process.env.EMAIL_PASS
  }
});

async function sendContactEmail(data) {
  const { name, email, company, service, message } = data;
  
  const mailOptions = {
    from: '"CM Consulting Website" <contactos@cmconsulting.com.co>',
    to: "contactos@cmconsulting.com.co",
    subject: `Nuevo mensaje de contacto - ${name}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
      ${service ? `<p><strong>Servicio:</strong> ${service}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: `Missing required field: ${field}` 
          }),
          { 
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email format' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const result = await sendContactEmail(data);
    
    if (result.success) {
      return new Response(
        JSON.stringify({ success: true }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } else {
      throw new Error(result.error || 'Error sending email');
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Error processing contact form' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
