import { Weather } from '@models/weather.interface';

export function calculateAverageDegrees(
  weatherData: Weather[],
  key: keyof Weather,
  type: 'min' | 'max',
): number {
  const degrees: number[] = weatherData.map((time) => time[key] as number);

  switch (type) {
    case 'min':
      return Math.min(...degrees);

    case 'max':
      return Math.max(...degrees);
  }
}
