// components/ForecastCard.tsx
import Image from "next/image";
import React from "react";

interface ForecastCardProps {
  day: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      maxtemp_f: number;
      mintemp_f: number;
      condition: {
        icon: string;
        text: string;
      };
    };
  };
  unit?: string;
}

// components/ForecastCard.tsx
const ForecastCard: React.FC<ForecastCardProps> = ({ day, unit }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex flex-col items-center">
      <h3 className="font-bold">
        {new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}
      </h3>
      <p className="text-sm">
        High: {unit === "metric" ? day.day.maxtemp_c : day.day.maxtemp_f}°
        {unit === "metric" ? "C" : "F"}
      </p>
      <p className="text-sm">
        Low: {unit === "metric" ? day.day.mintemp_c : day.day.mintemp_f}°
        {unit === "metric" ? "C" : "F"}
      </p>
      <Image
        unoptimized
        width={12}
        height={12}
        src={"https:" + day.day.condition.icon}
        alt={day.day.condition.text}
        className="w-12 h-12"
      />
    </div>
  );
};

export default ForecastCard;
