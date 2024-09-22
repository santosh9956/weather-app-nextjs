// components/CitySearch.tsx
"use client";

import React, { useState, FC } from "react";

interface CitySearchProps {
  setCity: (city: string) => void;
}

const CitySearch: FC<CitySearchProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city"
        className="border rounded p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Search
      </button>
    </form>
  );
};

export default CitySearch;
