import { initEmailService, sendContactForm } from '../../utils/email/index.js';

export async function POST({ request }) {
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