export const JWT_SECRET = process.env.JWT_SECRET || 'cm-consulting-secret-key-2024';
export const TOKEN_EXPIRY = '24h';

// In production, these should be in a database
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  // Password: admin123
  passwordHash: '$2a$10$zqHYHWI0E.aqZYe/kD7XpuGWJ0Gj3u8.cJDT2ELZi2yfuEQQn4OYi'
};