import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedAction: "default",
  selectedAmount: 0,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setPriceAction: (state, action) => {
      state.selectedAction = action.payload;
    },
    setSelectedAmount: (state, action) => {
      state.selectedAmount = action.payload;
    },
  },
});

export const { setPriceAction, setSelectedAmount } = priceSlice.actions;
export default priceSlice.reducer;
