import { validateEmailData, createContactEmailTemplate } from '../../utils/email/index.js';
import { initEmailService, sendContactForm } from '../../utils/email/service.js';

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Validate request data
    const validation = validateEmailData(data);
    if (!validation.isValid) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: validation.errors.join(', ')
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Initialize EmailJS
    await initEmailService();

    // Create form data for EmailJS
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Send email using EmailJS
    const result = await sendContactForm(formData);
    
    if (result.status === 200) {
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