import bcrypt from 'bcryptjs';
import { ADMIN_CREDENTIALS } from './constants';

export async function isValidCredentials(username, password) {
  if (!username || !password || username !== ADMIN_CREDENTIALS.username) {
    return false;
  }
  
  try {
    const isValid = await bcrypt.compare(password, ADMIN_CREDENTIALS.passwordHash);
    return isValid;
  } catch (error) {
    console.error('Error validating credentials:', error);
    return false;
  }
}

export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}