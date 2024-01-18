import {
  setPersonalInformation,
  clearPersonalInformation,
} from "./personalInformationSlice";

export const savePersonalInformation = (data) => {
  return (dispatch) => {
    dispatch(setPersonalInformation(data));
  };
};

export const clearAndSavePersonalInformation = (data) => {
  return (dispatch) => {
    dispatch(clearPersonalInformation());
    dispatch(setPersonalInformation(data));
  };
};
