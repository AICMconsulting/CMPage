export function validateEmailData(data) {
  const errors = [];
  
  if (!data.user_name?.trim()) {
    errors.push('El nombre es requerido');
  }
  
  if (!data.user_email?.trim()) {
    errors.push('El email es requerido');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.user_email)) {
    errors.push('El formato del email es inválido');
  }
  
  if (!data.message?.trim()) {
    errors.push('El mensaje es requerido');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}