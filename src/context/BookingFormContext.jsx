"use client";

import { createContext, useContext, useState } from "react";

const BookingFormContext = createContext();

export function BookingFormContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Fix: isOpen not isopen
  const [data, setData] = useState({
    slug: null,
    source: null,
  });

  const openDialog = (data = {}) => {
    setData(data);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setData({ slug: null, source: null }); // reset on close
  };

  return <BookingFormContext.Provider value={{ isOpen, openDialog, closeDialog, data }}>{children}</BookingFormContext.Provider>;
}

export const useBookingFormContext = () => {
  const context = useContext(BookingFormContext);
  if (!context) {
    throw new Error("useBookingFormContext must be used within a BookingFormContextProvider");
  }
  return context;
};
