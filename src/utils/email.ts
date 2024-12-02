import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter object using Office 365
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "contactos@cmconsulting.com.co",
    pass: process.env.EMAIL_PASS || "your-email-password"
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

interface ContactData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export async function sendContactEmail(data: ContactData) {
  const { name, email, company, service, message } = data;
  
  const mailOptions = {
    from: {
      name: "CM Consulting Website",
      address: "contactos@cmconsulting.com.co"
    },
    to: "contactos@cmconsulting.com.co",
    replyTo: email,
    subject: `Nuevo mensaje de contacto - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #163259;">Nuevo mensaje de contacto</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          ${service ? `<p><strong>Servicio:</strong> ${service}</p>` : ''}
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Este mensaje fue enviado desde el formulario de contacto del sitio web.
        </p>
      </div>
    `
  };

  try {
    // Verify connection configuration
    await transporter.verify();
    
    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}