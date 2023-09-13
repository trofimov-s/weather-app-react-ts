import { createSlice } from '@reduxjs/toolkit';
import { getUserLocationAction } from './userLocationActions';
import { UserLocationData } from '@models/user-location-data.interface';
import { RootState } from './index';

interface UserLocation {
  userLocation: UserLocationData;
}

const initialState: UserLocation = {
  userLocation: null,
};

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserLocationAction.fulfilled, (state: UserLocation, { payload }) => {
      state.userLocation = payload;
    });
  },
});

export const selectUserLocation = (state: RootState) => state.userLocation.userLocation;

export default userLocationSlice;
