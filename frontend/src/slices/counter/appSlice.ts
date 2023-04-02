import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// type for the slice state
interface AppState {
  order_id: number;
  categories: never[];
}

// initial state definition
const initialState: AppState = {
  order_id: Math.floor(Math.random() * (1000000 - 0)),
  categories: [],
};

// Slice is a combination of reducers with action
// reducer関数の名前とnameから自動的にaction Typeが生成される
export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<never[]>) => {
      state.categories = action.payload;
      console.log(state.categories);
    },
  },
});

// Export a part of actions of slice
export const appActions = appSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectOrderId = (state: RootState) => state.app.order_id;
export const selectCategory = (state: RootState) => state.app.categories;
// Export a part of reducers of slice
export const appReducer = appSlice.reducer;
