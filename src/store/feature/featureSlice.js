import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeText: 0,
  imageForActiveText: "imagen1.jpg",
};

const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setActiveText: (state, action) => {
      state.activeText = action.payload;
    },
    setImageForActiveText: (state, action) => {
      state.imageForActiveText = action.payload;
    },
  },
});

export const { setActiveText, setImageForActiveText } = featureSlice.actions;

export const selectActiveText = (state) => state.feature.activeText;
export const selectImageForActiveText = (state) =>
  state.feature.imageForActiveText;

export default featureSlice.reducer;
