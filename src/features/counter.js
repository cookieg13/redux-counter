import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = 0;
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: initialStateValue },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
