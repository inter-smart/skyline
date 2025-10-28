"use client";

import { createContext, useContext, useState } from "react";

const BookingFormContext = createContext();

export function BookingFormContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Fix: isOpen not isopen

  const openDialog = () => setIsOpen(true); // Fix: renamed from openForm
  const closeDialog = () => setIsOpen(false); // Fix: renamed from closeForm

  return <BookingFormContext.Provider value={{ isOpen, openDialog, closeDialog }}>{children}</BookingFormContext.Provider>;
}

export const useBookingFormContext = () => {
  const context = useContext(BookingFormContext);
  if (!context) {
    throw new Error("useBookingFormContext must be used within a BookingFormContextProvider");
  }
  return context;
};
