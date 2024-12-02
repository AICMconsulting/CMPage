import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const TOKEN_EXPIRY = '24h';

// In production, these should be in a database
const ADMIN_CREDENTIALS = {
  username: 'admin',
  //Password: "admin123"
  passwordHash: '$2a$10$X7VqKXZ9jX5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X5X'
};

export async function isValidCredentials(username, password) {
  if (username !== ADMIN_CREDENTIALS.username) {
    return false;
  }
  
  try {
    return await bcrypt.compare(password, ADMIN_CREDENTIALS.passwordHash);
  } catch (error) {
    console.error('Error validating credentials:', error);
    return false;
  }
}

export function generateToken(username) {
  try {
    return jwt.sign(
      { username, type: 'admin' },
      JWT_SECRET,
      { expiresIn: TOKEN_EXPIRY }
    );
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Error generating authentication token');
  }
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded && decoded.type === 'admin';
  } catch (error) {
    console.error('Error verifying token:', error);
    return false;
  }
}

export function hashPassword(password) {
  return bcrypt.hash(password, 10);
}