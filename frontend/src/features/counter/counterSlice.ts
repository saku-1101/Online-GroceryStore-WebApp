import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// type for the slice state
interface CounterState {
  value: number;
}

// initial state definition
const initialState: CounterState = {
  value: 0,
};

// Slice is a combination of reducers with action
// reducer関数の名前ととnameから自動的にaction Typeが生成
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // stateとはinitalState
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export a part of actions of slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;
// Export a part of reducers of slice
export const counterReducer = counterSlice.reducer;
