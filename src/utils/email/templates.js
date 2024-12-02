export function createContactEmailTemplate(data) {
  const { user_name, user_email, company, service, message } = data;
  
  return {
    from: {
      name: "CM Consulting Website",
      address: "contactos@cmconsulting.com.co"
    },
    to: "contactos@cmconsulting.com.co",
    replyTo: user_email,
    subject: `Nuevo mensaje de contacto - ${user_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #163259;">Nuevo mensaje de contacto</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p><strong>Nombre:</strong> ${user_name}</p>
          <p><strong>Email:</strong> ${user_email}</p>
          ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
          ${service ? `<p><strong>Servicio:</strong> ${service}</p>` : ''}
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          Este mensaje fue enviado desde el formulario de contacto del sitio web.
        </p>
      </div>
    `
  };
}