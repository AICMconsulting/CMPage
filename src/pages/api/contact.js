import { sendContactEmail, validateEmailData } from '../../utils/email/index.js';

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

    // Send email
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
      throw new Error(result.error || 'Error al enviar el correo');
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