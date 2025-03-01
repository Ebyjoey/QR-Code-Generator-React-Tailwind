import React from "react";

export const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`py-2 px-4 rounded-lg bg-teal-500 text-white font-semibold shadow-md hover:bg-teal-600 transition duration-300 ${className}`}
  >
    {children}
  </button>
);
