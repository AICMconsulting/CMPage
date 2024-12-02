import { a as addComment } from '../../chunks/blog_DTxU6iFE.mjs';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
