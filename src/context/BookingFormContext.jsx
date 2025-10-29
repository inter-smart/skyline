"use client";

import { createContext, useContext, useState } from "react";

const BookingFormContext = createContext();

export function BookingFormContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false); // Fix: isOpen not isopen
  const [showSuccess, setShowSuccess] = useState(false); // ✅ new state
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

  const openSuccess = () => {
    setShowSuccess(true);
  };

  // close success modal and reset everything
  const closeSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <BookingFormContext.Provider
      value={{
        isOpen,
        openDialog,
        closeDialog,
        data,
        showSuccess,
        openSuccess,
        closeSuccess,
      }}
    >
      {children}
    </BookingFormContext.Provider>
  );
}

export const useBookingFormContext = () => {
  const context = useContext(BookingFormContext);
  if (!context) {
    throw new Error(
      "useBookingFormContext must be used within a BookingFormContextProvider"
    );
  }
  return context;
};
