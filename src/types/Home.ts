export interface CurrentObj {
  temp_f: number;
  temp_c: number;
  condition: {
    code: number;
    icon: string;
    text: string;
  };
}

export interface LocationObj {
  country: string;
  lat: number;
  localtime: Date;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface Data {
  current: CurrentObj;
  location: LocationObj;
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  maxtemp_f: number;
  mintemp_f: number;
  avgtemp_c: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Array<{
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  }>;
}

export interface WeatherForecast {
  forecastday: ForecastDay[];
}
