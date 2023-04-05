import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer, // add store: Reducer pair
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {app: appReducer}
export type AppDispatch = typeof store.dispatch;
