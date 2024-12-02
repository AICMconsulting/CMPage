import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: 'cmweb.database.windows.net',
  database: 'CMPage',
  user: 'admin-db-dev',
  password: 'Colombia2024*',
  options: {
    encrypt: true,
    trustServerCertificate: false,
    enableArithAbort: true,
    useUTC: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  requestTimeout: 30000
};

let pool = null;

export async function getConnection() {
  try {
    if (!pool) {
      pool = await new sql.ConnectionPool(config).connect();
      console.log('Database connected successfully');
    }
    return pool;
  } catch (error) {
    console.error('Database connection error:', error);
    pool = null; // Reset pool on error
    throw new Error('Database connection failed');
  }
}

export async function closeConnection() {
  try {
    if (pool) {
      await pool.close();
      pool = null;
      console.log('Database connection closed');
    }
  } catch (error) {
    console.error('Error closing database connection:', error);
    throw error;
  }
}

// Ensure connection is closed when the process ends
process.on('SIGTERM', closeConnection);
process.on('SIGINT', closeConnection);