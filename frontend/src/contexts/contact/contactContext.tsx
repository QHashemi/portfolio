"use client";

import { createContext, useReducer, useContext, ReactNode } from "react";
import axios from "axios";
import { Contact, ContactInitialState, contactInitialState, } from "./contactTypes";
import { contactReducer } from "./contactReducer";


interface ContactContextType {
  state: ContactInitialState;
  sendEmail: (formData: Contact) => Promise<void>;
  resetState: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(contactReducer, contactInitialState);


  // send Email
  const sendEmail = async (formData: Contact) => {
    dispatch({ type: "SEND_START" });

    try {
      const res: {data: {message: string}} = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email/send`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    
      console.log(res.data)

      dispatch({ type: "SEND_SUCCESS", payload: { msg: res.data?.message }, });
    } catch (err: any) {
      dispatch({ type: "SEND_ERROR", payload: err.message });
    }
  };

  const resetState = () => dispatch({ type: "RESET_STATE" });

  return (
    <ContactContext.Provider value={{ state, sendEmail, resetState }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
