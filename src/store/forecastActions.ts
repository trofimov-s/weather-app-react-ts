import WeatherApi from '@api/weather-api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CitiesForecastDictionary } from '@models/weather.interface';
import LocalStorageHelper from '@utils/local-storage-helper';
import { LocalStorageKeys } from '@enums/local-storage-keys.enum';
import { setFavoriteCities, setSelectedCity, setUnits } from './forecastSlice';
import { UNITS } from '@enums/units.enum';
import { RootState } from '.';

const weatherApi = WeatherApi;
const localStorageHelper = LocalStorageHelper;

// INITIALIZE ACTION --- START
const INIT = createAsyncThunk<void, string>('forecast/init', (userCity: string, { dispatch }) => {
  // extract favorite cities from storage
  const favoriteCities = localStorageHelper.getItem(LocalStorageKeys.FAVORITE_CITIES);
  let cities = favoriteCities ? favoriteCities.split(',') : [];
  dispatch(setFavoriteCities(cities));

  // extract units from storage
  let unit = localStorageHelper.getItem(LocalStorageKeys.FAVORITE_UNITS) as UNITS;
  unit = unit || UNITS.STANDARD;
  dispatch(setUnits(unit));

  cities = cities.filter((c) => c !== userCity);

  if (userCity) {
    dispatch(GetCityForecast({ city: userCity, unit }));
  }

  if (cities.length) {
    dispatch(GetBacthCitiesForecast({ cities, unit }));
  }
});
// INITIALIZE ACTION --- END

// FAVORITE CITIES HANDLING --- START
const ToggleFavorite = createAsyncThunk<string[], string>(
  'forecast/addCityToFavorite',
  (city: string, { getState }) => {
    const cityInLowerCase = city.toLowerCase();
    const favoriteCities = (getState() as RootState).forecast.favoriteCities;
    const isFavorite = favoriteCities.includes(cityInLowerCase);
    const cities = isFavorite
      ? favoriteCities.filter((c) => c !== cityInLowerCase)
      : [...favoriteCities, cityInLowerCase];

    localStorageHelper.setItem(LocalStorageKeys.FAVORITE_CITIES, cities.join(','));

    return cities;
  },
);
// FAVORITE CITIES HANDLING --- END

// UNIT CHANGE HANDLING --- START
const ChangeUnit = createAsyncThunk<UNITS, UNITS>(
  'forecast/changeUnit',
  (unit: UNITS, { dispatch, getState }) => {
    localStorageHelper.setItem(LocalStorageKeys.FAVORITE_UNITS, unit);
    const forecastDict: CitiesForecastDictionary = (<RootState>getState()).forecast.forecast;

    const citiesNeedToFetch: string[] = Object.keys(forecastDict).filter(
      (city: string) => !forecastDict[city][unit],
    );

    if (citiesNeedToFetch.length) {
      dispatch(GetBacthCitiesForecast({ cities: citiesNeedToFetch, unit }));
    }

    return unit;
  },
);
// UNIT CHANGE HANDLING --- END

// FETCH FORECAST ACTIONS --- START
const GetCityForecast = createAsyncThunk<CitiesForecastDictionary, { city: string; unit?: UNITS }>(
  'forecast/getCityForecast',
  async ({ city, unit }, { dispatch, getState }) => {
    const currentUnit = (getState() as RootState).forecast.currentUnit;
    const forecast = await weatherApi.getCityForecast(city, unit || currentUnit);

    dispatch(setSelectedCity(Object.keys(forecast)[0]));
    return forecast;
  },
);

const GetBacthCitiesForecast = createAsyncThunk<
  CitiesForecastDictionary[],
  { cities: string[]; unit: UNITS }
>('forecast/getBacthCitiesForecast', async ({ cities, unit }) => {
  const requests: Promise<CitiesForecastDictionary>[] = cities.map((city) =>
    weatherApi.getCityForecast(city, unit),
  );
  const citiesForecast = await Promise.all(requests);

  return citiesForecast;
});
// FETCH FORECAST ACTIONS --- END

export const ForecastActions = {
  init: INIT,
  getCityForecast: GetCityForecast,
  toggleFavorite: ToggleFavorite,
  getBacthCitiesForecast: GetBacthCitiesForecast,
  changeUnit: ChangeUnit,
};
