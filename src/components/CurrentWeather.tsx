// components/CurrentWeather.tsx
import React from "react";

interface CurrentObj {
  temp_f: number;
  temp_c: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
}

interface LocationObj {
  country: string;
  lat: number;
  localtime: Date;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

interface Data {
  current: CurrentObj;
  location: LocationObj;
}

interface CurrentWeatherProps {
  data: Data;
  unit?: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, unit }) => {
  if (!data) return null;

  const { location, current } = data;

  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h1 className="text-xl font-bold">{location.name}</h1>
      <p className="text-2xl">
        {unit === "metric" ? `${current.temp_c}°C` : `${current.temp_f}°F`}
      </p>
      <p className="text-gray-500">{current.condition.text}</p>
      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="w-16 h-16"
      />
    </div>
  );
};

export default CurrentWeather;
