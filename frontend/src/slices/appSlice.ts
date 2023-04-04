import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../src/app/store';
import { OrderedProduct } from '../src/core/models/OrderedProduct.model';

interface Items {
  product_id: number;
  product_quantity: number;
}
interface Subtotal {
  product_id: number;
  product_subtotal: number;
}
// type for the slice state
interface AppState {
  order_id: number;
  items: Array<Items>;
  items_sum: number;
  subtotal: Array<Subtotal>;
  total: number;
  categories: [];
  selected_category: number;
  search_results: [];
  order_details: Array<OrderedProduct>;
}

// initial state definition
const initialState: AppState = {
  order_id: Math.floor(Math.random() * (1000000 - 0)),
  items: [],
  items_sum: 0,
  subtotal: [],
  total: 0,
  categories: [],
  selected_category: 0,
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.selected_category = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<[]>) => {
      state.search_results = action.payload;
    },
    setItems: (state, action: PayloadAction<Items>) => {
      const index = state.items.findIndex((el) => el['product_id'] === action.payload['product_id']);
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items[index] = action.payload;
      }
      state.items_sum = state.items.reduce((total, item) => total + item.product_quantity, 0);
    },
    setTotal: (state, action: PayloadAction<Subtotal>) => {
      const index = state.subtotal.findIndex((el) => el['product_id'] === action.payload['product_id']);
      if (index === -1) {
        state.subtotal.push(action.payload);
      } else {
        state.subtotal[index] = action.payload;
      }
      state.total = state.subtotal.reduce((total, item) => total + item.product_subtotal, 0);
    },
    setOrderDetails: (state, action: PayloadAction<Array<OrderedProduct>>) => {
      state.order_details = action.payload;
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
export const selectItems = (state: RootState) => state.app.items_sum;
export const selectTotal = (state: RootState) => state.app.total;
export const selectOrderDetails = (state: RootState) => state.app.order_details;
// Export a part of reducers of slice
export const appReducer = appSlice.reducer;
