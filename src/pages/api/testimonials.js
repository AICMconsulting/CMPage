import { addTestimonial } from '../../db/testimonials.js';

export async function POST({ request }) {
  try {
    const testimonial = await request.json();
    const id = await addTestimonial(testimonial);
    
    return new Response(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error in testimonials API:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error al procesar el testimonio' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}