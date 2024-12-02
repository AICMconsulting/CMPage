import { getConnection } from './config.js';

export async function getAllTestimonials() {
  try {
    const pool = await getConnection();
    const result = await pool.request()
      .query(`
        SELECT * FROM Testimonials 
        WHERE IsApproved = 1 
        ORDER BY CreatedAt DESC
      `);
    return result.recordset;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return []; // Return empty array instead of throwing
  }
}

export async function addTestimonial(testimonial) {
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