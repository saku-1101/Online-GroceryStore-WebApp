import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from '../slices/counter/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer, // state を追加
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {app: appReducer}
export type AppDispatch = typeof store.dispatch;
