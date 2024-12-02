import { g as getConnection } from '../../chunks/config_C9Mtsncs.mjs';
export { renderers } from '../../renderers.mjs';

async function addTestimonial(testimonial) {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .input('name', testimonial.name)
      .input('company', testimonial.company)
      .input('testimonial', testimonial.testimonial)
      .input('rating', testimonial.rating)
      .input('imageUrl', testimonial.imageUrl)
      .query(`
        INSERT INTO Testimonials (Name, Company, Testimonial, Rating, ImageUrl)
        VALUES (@name, @company, @testimonial, @rating, @imageUrl);
        SELECT SCOPE_IDENTITY() AS Id;
      `);
    return result.recordset[0].Id;
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
}

async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
