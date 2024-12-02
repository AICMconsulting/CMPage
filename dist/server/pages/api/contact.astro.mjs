import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

function validateEmailData(data) {
  const errors = [];
  
  if (!data.user_name?.trim()) {
    errors.push('El nombre es requerido');
  }
  
  if (!data.user_email?.trim()) {
    errors.push('El email es requerido');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) {
    errors.push('El formato del email es inválido');
  }
  
  if (!data.message?.trim()) {
    errors.push('El mensaje es requerido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

function createContactEmailTemplate(data) {
  const { user_name, user_email, company, service, message } = data;
  
  return {
    from: {
      name: "CM Consulting Website",
      address: "contactos@cmconsulting.com.co"
    },
    to: "contactos@cmconsulting.com.co",
    replyTo: user_email,
    subject: `Nuevo mensaje de contacto - ${user_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #163259;">Nuevo mensaje de contacto</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Nombre:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
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
}

// Create reusable transporter object using Office 365
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "contactos@cmconsulting.com.co",
    pass: process.env.EMAIL_PASS || ""
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

async function sendContactForm(data) {
  try {
    // Validate form data
    const validation = validateEmailData(data);
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }

    // Create email template
    const emailTemplate = createContactEmailTemplate(data);

    // Send email
    const info = await transporter.sendMail(emailTemplate);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

async function initEmailService() {
  try {
    await transporter.verify();
    console.log('Email service initialized successfully');
  } catch (error) {
    console.error('Error initializing email service:', error);
    throw error;
  }
}

async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Initialize email service
    await initEmailService();

    // Send email
    const result = await sendContactForm(data);
    
    if (result.success) {
      return new Response(
        JSON.stringify({ success: true }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } else {
      throw new Error('Error sending email');
    }
  } catch (error) {
    console.error('Contact API error:', {
      error: error.message,
      stack: error.stack
    });
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Error al procesar el formulario de contacto' 
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
