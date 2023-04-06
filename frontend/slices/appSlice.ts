import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../src/app/store';

// type for the slice state
interface AppState {
  order_id: number;
  items: number;
  subtotal: number;
  categories: [];
  selected_sub_category: number;
  search_results: [];
  order_details: [];
}

// initial state definition
const initialState: AppState = {
  order_id: Math.floor(Math.random() * (1000000 - 0)),
  items: 0,
  subtotal: 0,
  categories: [],
  selected_sub_category: 0,
  search_results: [],
  order_details: [],
};

// Slice is a combination of reducers with action
// reducer関数の名前とnameから自動的にaction Typeが生成される
export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<[]>) => {
      state.categories = action.payload;
    },
    setSubCategoryId: (state, action: PayloadAction<number>) => {
      state.selected_sub_category = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<[]>) => {
      state.search_results = action.payload;
    },
    setItems: (state, action: PayloadAction<number>) => {
      state.items += action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.subtotal += action.payload;
    },
    setDetails: (state, action: PayloadAction<[]>) => {
      state.order_details = action.payload;
    },
  },
});

// Export a part of actions of slice
export const appActions = appSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectOrderId = (state: RootState) => state.app.order_id;
export const selectCategory = (state: RootState) => state.app.categories;
export const selectSubCategoryId = (state: RootState) => state.app.selected_sub_category;
export const selectSearchResult = (state: RootState) => state.app.search_results;
export const selectItems = (state: RootState) => state.app.items;
export const selectTotal = (state: RootState) => state.app.subtotal;
export const selectOrderDetails = (state: RootState) => state.app.order_details;
// Export a part of reducers of slice
export const appReducer = appSlice.reducer;
