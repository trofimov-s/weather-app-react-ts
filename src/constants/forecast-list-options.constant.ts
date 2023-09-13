import { DataListOption } from '@models/data-list-option.interface';
import { Weather } from '@models/weather.interface';

export const ForecastListOptions: DataListOption<Weather>[] = [
  {
    title: 'Feels like',
    key: 'feels_like',
    type: 'units',
  },
  {
    title: 'Min',
    key: 'temp_min',
    type: 'units',
  },
  {
    title: 'Max',
    key: 'temp_max',
    type: 'units',
  },
  {
    title: 'Humidity',
    key: 'humidity',
    type: 'text',
  },
  {
    title: 'Description',
    key: 'description',
    type: 'text',
  },
];
