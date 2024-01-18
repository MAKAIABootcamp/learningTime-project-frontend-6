import { createSlice } from "@reduxjs/toolkit";

const infoDonationSlice = createSlice({
  name: "infoDonation",
  initialState: {
    donationType: null,
  },
  reducers: {
    setDonationType: (state, action) => {
      state.donationType = action.payload;
    },
  },
});

export const { setDonationType } = infoDonationSlice.actions;
export const selectDonationType = (state) => state.infoDonation.donationType;

export default infoDonationSlice.reducer;
