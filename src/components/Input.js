import React from "react";

export const Input = ({ value, onChange, placeholder, type }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
  />
);
