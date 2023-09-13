import { DailyForecast } from '@models/daily-forecast.type';
import { Weather } from '@models/weather.interface';
import { calculateAverageDegrees } from './calculate-average-degrees.function';

export function matToDailyForecast(forecasts: Weather[]): DailyForecast {
  const temp_min = calculateAverageDegrees(forecasts, 'temp_min', 'min');
  const temp_max = calculateAverageDegrees(forecasts, 'temp_max', 'min');

  const averageIndex = Math.floor(forecasts.length / 2);
  const { main, icon, date }: Weather = forecasts[averageIndex];

  return { temp_min, temp_max, main, icon, date };
}
