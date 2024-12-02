import { addComment } from '../../db/blog.js';

export async function POST({ request }) {
  try {
    const comment = await request.json();
    const id = await addComment(comment);
    
    return new Response(JSON.stringify({ id }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error in comments API:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}