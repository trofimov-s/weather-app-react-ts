import { CitiesForecastDictionary, ForecastData, Weather } from '@models/weather.interface';
import { RootState } from './index';
import { UNITS } from '@enums/units.enum';
import { createSelector } from '@reduxjs/toolkit';
import { ForecastState } from './forecastSlice';

const selectFavoriteCities = (state: RootState): string[] => state.forecast.favoriteCities;
const selectCurrentUnit = (state: RootState): UNITS => state.forecast.currentUnit;
const selectSelectedDate = (state: RootState): string => state.forecast.selectedDate;

const selectFavoriteCityForecast = createSelector(
  [(state: RootState) => state.forecast, (_, city: string) => city],
  (state, city: string): [string, Weather, UNITS] => {
    const forecast: CitiesForecastDictionary = state.forecast;
    const currentUnit: UNITS = state.currentUnit;
    const cityForecast: ForecastData = forecast[city][currentUnit];

    const date: string = cityForecast.forecastDates[0];

    const cityCurrentForecast: Weather = cityForecast.list[date][0];

    return [`${cityForecast.city}, ${cityForecast.country}`, cityCurrentForecast, currentUnit];
  },
);

const extractForecast = createSelector(
  [
    (state: RootState) => state.forecast,
    selectCurrentUnit,
    (state: RootState) => state.forecast.selectedCity,
  ],
  (forecastState: ForecastState, unit: UNITS, selectedCity: string): ForecastData => {
    const forecast = forecastState.forecast;

    return forecast?.[selectedCity]?.[unit] || null;
  },
);

const selectForecastDay = createSelector(
  [extractForecast, selectSelectedDate],
  (forecastData: ForecastData, selectedDate: string): Weather[] => forecastData?.list[selectedDate],
);

const selectLoading = (state: RootState): boolean =>
  state.forecast.isLoading || state.forecast.isLoadingBatchUpdating;
const selectBatchLoading = (state: RootState): boolean => state.forecast.isLoadingBatchUpdating;
const selectError = (state: RootState): string => state.forecast.error;

export const ForecastSelectors = {
  selectCurrentUnit,
  selectForecastDay,
  selectSelectedDate,
  selectFavoriteCities,
  selectFavoriteCityForecast,
  extractForecast,
  selectLoading,
  selectError,
  selectBatchLoading,
};
