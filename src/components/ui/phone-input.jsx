"use client";

import { useState, useRef, useEffect } from "react";
import { countries } from "@/data/countries";
import { cn } from "@/lib/utils";
import ReactCountryFlag from "react-country-flag";

// Component for country flag (using emoji flags)
const CountryFlag = ({ countryCode }) => {
  const getFlagEmoji = (countryCode) => {
    if (!countryCode || countryCode.length !== 2) return "🏳️";
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  return <span className="text-lg">{getFlagEmoji(countryCode)}</span>;
};

// Main PhoneInput component
export const PhoneInput = ({
  value = "",
  onChange,
  onCountryChange,
  placeholder = "Phone number*",
  className = "",
  disabled = false,
  defaultCountry = "AE", // UAE as default
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === defaultCountry) || countries[0]
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Filter countries by search term
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.mobileCode.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Parse initial value if provided
  useEffect(() => {
    if (!value) {
      setSelectedCountry(
        countries.find((c) => c.code === defaultCountry) || countries[0]
      );
      setPhoneNumber("");
    } else if (value && typeof value === "string") {
      const cleanValue = value.replace(/\s+/g, " ").trim();
      const possibleCode = cleanValue.split(" ")[0];
      const matchingCountry = countries.find((c) =>
        cleanValue.startsWith(c.mobileCode)
      );

      if (matchingCountry) {
        setSelectedCountry(matchingCountry);
        setPhoneNumber(
          cleanValue.replace(matchingCountry.mobileCode, "").trim()
        );
      } else {
        setSelectedCountry(
          countries.find((c) => c.code === defaultCountry) || countries[0]
        );
        setPhoneNumber(cleanValue);
      }
    }
  }, [value, defaultCountry]);
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setPhoneNumber(""); // Clear the phone number when country changes
    setIsOpen(false);
    setSearchTerm("");

    // Focus back to phone input
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Notify parent of country change
    if (onCountryChange) {
      onCountryChange(country);
    }

    // Update the combined value with just the country code (no phone number)
    const newValue = country.mobileCode;
    if (onChange) {
      onChange(newValue);
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    // Only allow numbers, remove any non-numeric characters
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    setPhoneNumber(numericValue);

    // Update the combined value
    const newValue =
      selectedCountry.mobileCode + (numericValue ? " " + numericValue : "");
    if (onChange) {
      onChange(newValue.trim());
    }
  };

  return (
    <div
      className="w-full relative m-auto "
      ref={dropdownRef}
    >
      <div
        className={cn("flex items-center h-full w-full relative", className)}
      >
        {/* Country selector button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={disabled}
          className="flex items-center gap-1  bg-[rgba(0,51,91,0.55)] h-full !p-[1px_10px] xl:!p-[2px_10px]  3xl:!p-[5px_10px] rounded-[3px] 3xl:rounded-[5px] 
           min-[20px] xl:min-h-[25px] 3xl:min-h-[35px] focus:outline-none 
          transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Select country"
        >
          <ReactCountryFlag
            countryCode={selectedCountry.code}
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
              marginRight: "0.5em",
            }}
          />
          <span className="text-[11px] md:text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-light text-white mr-1">
            {selectedCountry.mobileCode}
          </span>
          <svg
            viewBox="0 0 10 8"
            className={cn(
              "w-[11px] h-[8px] transition-transform text-white ",
              isOpen && "rotate-180"
            )}
          >
            <path d="M0.196331 1.31367L4.88879 6.7222C4.96443 6.80933 5.05825 6.87927 5.16383 6.92722C5.26941 6.97517 5.38424 7 5.50044 7C5.61665 7 5.73148 6.97517 5.83705 6.92722C5.94263 6.87927 6.03646 6.80933 6.11209 6.7222L10.8046 1.31367C11.2524 0.797419 10.8811 0 10.1929 0H0.80664C0.118448 0 -0.252839 0.797419 0.196331 1.31367Z" fill="white" />

          </svg>


        </button>

        {/* Phone number input */}
        <input
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onKeyDown={(e) => {
            // Allow backspace, delete, tab, escape, enter
            if (
              [8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
              // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
              (e.keyCode === 65 && e.ctrlKey === true) ||
              (e.keyCode === 67 && e.ctrlKey === true) ||
              (e.keyCode === 86 && e.ctrlKey === true) ||
              (e.keyCode === 88 && e.ctrlKey === true)
            ) {
              return;
            }
            // Ensure that it's a number and stop the keypress
            if (
              (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
              (e.keyCode < 96 || e.keyCode > 105)
            ) {
              e.preventDefault();
            }
          }}
          placeholder={placeholder}
          disabled={disabled}
          className="!text-[9px] md:!text-[10px] 2xl:!text-[14px] 3xl:!text-[17px] !text-white font-regular placeholder:!text-white flex-1  
           px-2 border-0 bg-transparent rounded-[0px] outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 
           focus-visible:shadow-none font-base1"
          {...props}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+7px)] left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg 
        max-h-60 overflow-hidden z-50 w-full max-w-[90%]">
          {/* Search input */}
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-[9px] sm:text-[10px] 3xl:text-[14px] border border-gray-300 rounded focus:outline-none focus:ring-2
               focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Countries list */}
          <div className="max-h-48 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <button
                  key={country.code + index}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full px-4 py-1 sm:py-2 text-left border-b border-gray-100  hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                   flex items-center gap-3 transition-colors"
                >
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-gray-900 truncate mb-[3px]">
                      {country.name}
                    </div>
                    <div className="text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-gray-500">
                      {country.mobileCode}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-[10px] sm:text-[12px] xl:text-[14px] text-gray-500 text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
