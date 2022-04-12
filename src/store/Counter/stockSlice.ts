import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterProps {
  counter?: number;
}

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { decrement, increment } = stock.actions;

export const selectCounter = (state: RootState) => state.counter;

export default stock.reducer;
