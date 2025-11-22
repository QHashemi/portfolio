"use client";

import { Contact, ContactInitialState } from "../types/contactType";
import { createContext, useReducer, useContext, ReactNode } from "react";
import axios from "axios";

// ✅ 1️⃣ Initial state
const initialState: ContactInitialState = {
  formData: { first_name: "", last_name: "", email: "", message: "" },
  loading: false,
  error: null,
  success: false,
  msg: "",
};


// ✅ 2️⃣ Define action types
type ContactAction =
  | { type: "SEND_START" }
  | { type: "SEND_SUCCESS", payload: { msg: string } }
  | { type: "SEND_ERROR"; payload: string }
  | { type: "REST_STATE" }


// ✅ 3️⃣ Reducer with correct state type
function contactReducer(state: ContactInitialState, action: ContactAction): ContactInitialState {

  switch (action.type) {
    case "SEND_START":
      return { ...state, loading: true, success: false, error: null };
    case "SEND_SUCCESS":
      return { ...state, loading: false, success: true, error: null, msg: action.payload.msg };
    case "SEND_ERROR":
      return { ...state, loading: false, success: false, error: action.payload };
    case "REST_STATE":
      return { ...state, loading: false, success: false, error: null }
    default:
      return state;
  }
}

// ✅ 4️⃣ Define context type
interface ContactContextType {
  state: ContactInitialState;
  sendEmail: (formData: Contact) => Promise<void>;
  resetState: () => void;
}


// ✅ 5️⃣ Create context (with undefined default for safety)
const ContactContext = createContext<ContactContextType | undefined>(undefined);




// ✅ 6️⃣ Provider component
export function ContactProvider({ children }: { children: ReactNode }) {

  const [state, dispatch] = useReducer(contactReducer, initialState);


  const sendEmail = async (formData: Contact) => {
    dispatch({ type: "SEND_START" });
    try {
      // send email to backend python fastapi
      const res = await axios.post("http://localhost:8000/email/send", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const response: any = res.data;
     
      dispatch({ type: "SEND_SUCCESS", payload: { msg: response.message } });

    } catch (err: any) {
      dispatch({ type: "SEND_ERROR", payload: err.message });
    }
  };

  const resetState = () => {
    dispatch({ type: "REST_STATE" })
  }

  return (
    <ContactContext.Provider value={{ state, sendEmail, resetState }}>
      {children}
    </ContactContext.Provider>
  );
}


// ✅ 7️⃣ Custom hook (with error handling if used outside provider)
export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}
