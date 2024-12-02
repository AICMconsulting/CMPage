export const emailConfig = {
  smtp: {
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "contactos@cmconsulting.com.co"
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  }
};