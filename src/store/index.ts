import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userLocationSlice from './userLocationSlice';
import forecastSlice from './forecastSlice';

export const store = configureStore({
  reducer: {
    userLocation: userLocationSlice.reducer,
    forecast: forecastSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
