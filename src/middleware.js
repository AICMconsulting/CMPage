import { defineMiddleware } from 'astro:middleware';
import { verifyToken } from './utils/auth';

export const onRequest = defineMiddleware(async ({ request, cookies, redirect }, next) => {
  const url = new URL(request.url);
  
  // Allow static assets and API endpoints
  if (url.pathname.startsWith('/_astro/') || 
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/images/') ||
      url.pathname.startsWith('/favicon')) {
    return next();
  }

  // Public routes that don't require authentication
  const publicRoutes = [
    '/admin/login',
    '/',
    '/blog',
    '/servicios',
    '/testimonios',
    '/contacto',
    '/nosotros'
  ];

  // Check if the current path starts with any of the public routes
  const isPublicRoute = publicRoutes.some(route => 
    url.pathname === route || url.pathname.startsWith(`${route}/`)
  );

  if (isPublicRoute) {
    return next();
  }

  // Protect admin routes
  if (url.pathname.startsWith('/admin')) {
    const token = cookies.get('adminToken');
    if (!token?.value || !verifyToken(token.value)) {
      return redirect('/admin/login');
    }
  }

  return next();
});