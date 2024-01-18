import { createSlice } from "@reduxjs/toolkit";

const personalInformationSlice = createSlice({
  name: "personalInformation",
  initialState: {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    idNumber: "",
    note: "",
  },
  reducers: {
    setPersonalInformation: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearPersonalInformation: (state) => {
      return {
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        idNumber: "",
        note: "",
      };
    },
  },
});

export const { setPersonalInformation, clearPersonalInformation } =
  personalInformationSlice.actions;
export default personalInformationSlice.reducer;
