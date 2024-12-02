import emailjs from '@emailjs/browser';
import { emailConfig } from './config';
import { validateEmailData } from './validation';
import type { EmailResult } from './types';

export async function initEmailService(): Promise<void> {
  try {
    emailjs.init(emailConfig.publicKey);
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
    throw error;
  }
}

export async function sendContactForm(form: HTMLFormElement): Promise<EmailResult> {
  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    const validation = validateEmailData(data);
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }

    const result = await emailjs.sendForm(
      emailConfig.serviceId,
      emailConfig.templateId,
      form,
      emailConfig.publicKey
    );

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}