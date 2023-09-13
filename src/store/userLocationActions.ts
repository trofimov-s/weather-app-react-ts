import UserLocationApi from '@api/user-lcoation-api';
import { UserLocationData } from '@models/user-location-data.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ForecastActions } from './forecastActions';

const api = UserLocationApi;

export const getUserLocationAction = createAsyncThunk<UserLocationData>(
  'userLocation/getUserLocation',
  async (_, { dispatch }) => {
    try {
      const location = await api.getUserLocation();
      dispatch(ForecastActions.init(location.city.toLowerCase()));
      return location;
    } catch (error) {
      dispatch(ForecastActions.init(null));
    }
  },
);
