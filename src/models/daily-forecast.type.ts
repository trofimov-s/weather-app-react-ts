import { Weather } from './weather.interface';

export type DailyForecast = Omit<Weather, 'temp' | 'feels_like' | 'humidity' | 'description'>;
