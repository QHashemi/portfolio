// contactTypes.ts

export interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export interface ContactInitialState {
  formData: Contact;
  loading: boolean;
  error: string | null;
  success: boolean;
  msg: string;
}

// Initial state
export const contactInitialState: ContactInitialState = {
  formData: { first_name: "", last_name: "", email: "", message: "" },
  loading: false,
  error: null,
  success: false,
  msg: "",
};

// Allowed reducer actions
export type ContactAction =
  | { type: "SEND_START" }
  | { type: "SEND_SUCCESS"; payload: { msg: string } }
  | { type: "SEND_ERROR"; payload: string }
  | { type: "RESET_STATE" };
