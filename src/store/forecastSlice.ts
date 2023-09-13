import { CitiesForecastDictionary } from '@models/weather.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ForecastActions } from './forecastActions';
import { UNITS } from '@enums/units.enum';

export interface ForecastState {
  forecast: CitiesForecastDictionary;
  isLoading: boolean;
  isLoadingBatchUpdating: boolean;
  error: string;
  currentUnit: UNITS;
  favoriteCities: string[];
  selectedCity: string;
  selectedDate: string;
}

const initialState: ForecastState = {
  forecast: {},
  isLoading: true,
  isLoadingBatchUpdating: false,
  error: null,
  currentUnit: null,
  favoriteCities: [],
  selectedCity: null,
  selectedDate: null,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setFavoriteCities(state, action: PayloadAction<string[]>) {
      state.favoriteCities = action.payload;
    },
    setUnits(state, action: PayloadAction<UNITS>) {
      state.currentUnit = action.payload;
    },
    setSelectedCity(state, action: PayloadAction<string>) {
      state.selectedCity = action.payload;
      state.error = null;
    },
    setSelectedDay(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
    showIsLoadingBatchUpdating(state) {
      state.isLoadingBatchUpdating = true;
    },
    hideIsLoadingBatchUpdating(state) {
      state.isLoadingBatchUpdating = false;
    },
    skipError(state) {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(ForecastActions.getCityForecast.fulfilled, (state, { payload }) => {
      const city = Object.keys(payload)[0];
      const unit = Object.keys(payload[city])[0] as UNITS;

      if (city in state.forecast) {
        state.forecast[city] = { ...state.forecast[city], ...payload[city] };
      } else {
        state.forecast = { ...state.forecast, ...payload };
      }

      state.selectedDate = payload[city][unit].forecastDates[0];
      state.isLoading = false;
    });
    builder.addCase(
      ForecastActions.getCityForecast.rejected,
      (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(ForecastActions.toggleFavorite.fulfilled, (state, action) => {
      state.favoriteCities = action.payload;
    });
    builder.addCase(ForecastActions.changeUnit.fulfilled, (state, action) => {
      state.currentUnit = action.payload;
    });
    builder.addCase(ForecastActions.getBacthCitiesForecast.fulfilled, (state, action) => {
      const forecasts: CitiesForecastDictionary[] = action.payload;

      const forecastsDic: CitiesForecastDictionary = forecasts.reduce(
        (
          prev: CitiesForecastDictionary,
          forecast: CitiesForecastDictionary,
        ): CitiesForecastDictionary => {
          const city = Object.keys(forecast)[0];
          const unit = Object.keys(forecast[city])[0] as UNITS;

          const cityForecast = { ...state.forecast[city], [unit]: forecast[city][unit] };

          return { ...prev, [city]: cityForecast };
        },
        {},
      );

      state.forecast = { ...state.forecast, ...forecastsDic };
      state.isLoadingBatchUpdating = false;
    });
  },
});

export const {
  setFavoriteCities,
  setUnits,
  setSelectedCity,
  setSelectedDay,
  showLoading,
  hideLoading,
  showIsLoadingBatchUpdating,
  hideIsLoadingBatchUpdating,
  skipError,
} = forecastSlice.actions;

export default forecastSlice;
