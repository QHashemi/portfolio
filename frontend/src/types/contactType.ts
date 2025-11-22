// @types/contactType.ts
export interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export interface ContactInitialState {
  formData: Contact;
  loading: boolean;
  success: boolean;
  error: string | null;
  msg: string
}