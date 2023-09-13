import { UNITS } from '@enums/units.enum';
import { Dictionary } from './dictionary.interface';

export interface Weather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  main: string;
  description: string;
  icon: string;
  date: string;
}

export interface ForecastData {
  forecastDates: Array<string>;
  city: string;
  country: string;
  units: UNITS;
  id: number;
  list: Dictionary<Array<Weather>>;
}

export interface CitiesForecastDictionary {
  [key: string]: {
    [key in UNITS]: ForecastData;
  };
}
