"use client";

import React from "react";

interface TemperatureToggleProps {
  unit: string;
  setUnit: (unit: string) => void;
}

const TemperatureToggle: React.FC<TemperatureToggleProps> = ({
  unit,
  setUnit,
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setUnit("metric")}
        className={`p-2 rounded ${
          unit === "metric" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Celsius
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`p-2 rounded ml-2 ${
          unit === "imperial" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Fahrenheit
      </button>
    </div>
  );
};

export default TemperatureToggle;
