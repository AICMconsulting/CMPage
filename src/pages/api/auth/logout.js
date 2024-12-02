export async function POST() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Set-Cookie': 'adminToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'Content-Type': 'application/json'
    }
  });
}