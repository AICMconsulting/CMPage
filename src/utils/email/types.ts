export interface EmailData {
  user_name: string;
  user_email: string;
  company?: string;
  service?: string;
  message: string;
  to_email: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface EmailResult {
  status: number;
  text: string;
}