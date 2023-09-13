import { Query } from '@models/query.interface';
import { BaseApi } from './base-api';
import { UNITS } from '@enums/units.enum';
import { WeatherResponse, WeatherResponseListItem } from '@models/weather-response.interface';
import { mapToWeather } from '@utils/map-to-weather.function';
import { CitiesForecastDictionary, ForecastData, Weather } from '@models/weather.interface';
import { Dictionary } from '@models/dictionary.interface';
import { toDictionary } from '@utils/to-dictionary.function';

class WeatherApiHandler extends BaseApi {
  private static _instance: WeatherApiHandler;
  private readonly _url = 'https://api.openweathermap.org/data/2.5/forecast';

  private buildQueryParams(query: Query): string {
    return encodeURI(
      Object.entries(query)
        .map((i) => i.join('='))
        .join('&'),
    );
  }

  private buildUrl(query: Query): string {
    const appId = import.meta.env.VITE_WEATHER_API_KEY;
    const queries: string = this.buildQueryParams({ ...query, appId });
    return `${this._url}/?${queries}`;
  }

  static get Instance(): WeatherApiHandler {
    return this._instance || (this._instance = new this());
  }

  getCityForecast(city: string, units = UNITS.STANDARD): Promise<CitiesForecastDictionary> {
    const query: Query = { q: city, units };
    return this.axiosInstance
      .get<WeatherResponse>(this.buildUrl(query))
      .then(({ data }): CitiesForecastDictionary => {
        const {
          list,
          city: { name, country, id },
        } = data;
        const weatherList: Array<Weather> = list.map(
          (item: WeatherResponseListItem): Weather => mapToWeather(item),
        );
        const weatherDictionary: Dictionary<Array<Weather>> = toDictionary<Weather>(
          weatherList,
          (e) => e.date,
          (v) => v.split(' ')[0],
        );

        const forecastData: ForecastData = {
          id,
          city: name,
          country,
          units,
          forecastDates: Object.keys(weatherDictionary),
          list: weatherDictionary,
        };

        const res = {
          [name.toLowerCase()]: {
            [units]: forecastData,
          },
        } as CitiesForecastDictionary;

        return res;
      });
  }
}

const WeatherApi = WeatherApiHandler.Instance;
export default WeatherApi;
