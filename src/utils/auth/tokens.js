import jwt from 'jsonwebtoken';
import { JWT_SECRET, TOKEN_EXPIRY } from './constants';

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