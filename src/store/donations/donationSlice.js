import { createSlice } from "@reduxjs/toolkit";

const donationSlice = createSlice({
  name: "donation",
  initialState: {
    donations: [],
    error: null,
  },
  reducers: {
    setDonations: (state, action) => {
      state.donations = action.payload;
    },
    addDonation: (state, action) => {
      state.donations.push(action.payload);
    },
    updateDonation: (state, action) => {
      state.donations = state.donations.map((donation) =>
        donation.id === action.payload.id ? { ...action.payload } : donation
      );
    },
    deleteDonation: (state, action) => {
      state.donations = state.donations.filter(
        (item) => item.id !== action.payload
      );
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setDonations,
  addDonation,
  updateDonation,
  deleteDonation,
  setError,
} = donationSlice.actions;

export default donationSlice.reducer;
