import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// type for the slice state
interface AppState {
  order_id: number;
  items: number;
  subtotal: number;
  categories: [];
  selected_category: number;
  search_results: [];
}

// initial state definition
const initialState: AppState = {
  order_id: Math.floor(Math.random() * (1000000 - 0)),
  items: 0,
  subtotal: 0,
  categories: [],
  selected_category: 0,
  search_results: [],
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.selected_category = action.payload;
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
  },
});

// Export a part of actions of slice
export const appActions = appSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectOrderId = (state: RootState) => state.app.order_id;
export const selectCategory = (state: RootState) => state.app.categories;
export const selectCategoryId = (state: RootState) => state.app.selected_category;
export const selectSearchResult = (state: RootState) => state.app.search_results;
export const selectItems = (state: RootState) => state.app.items;
export const selectTotal = (state: RootState) => state.app.subtotal;
// Export a part of reducers of slice
export const appReducer = appSlice.reducer;
