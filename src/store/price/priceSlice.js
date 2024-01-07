import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    selectedAction: "default",
  },
  reducers: {
    setPriceAction: (state, action) => {
      state.selectedAction = action.payload;
    },
  },
});

export const { setPriceAction } = priceSlice.actions;
export default priceSlice.reducer;
