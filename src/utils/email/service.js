import nodemailer from 'nodemailer';
import { emailConfig } from './config';
import { validateEmailData } from './validation';
import { createContactEmailTemplate } from './templates';

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

export async function sendContactForm(data) {
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

export async function initEmailService() {
  try {
    await transporter.verify();
    console.log('Email service initialized successfully');
  } catch (error) {
    console.error('Error initializing email service:', error);
    throw error;
  }
}