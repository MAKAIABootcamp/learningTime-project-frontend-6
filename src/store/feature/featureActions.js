import { createAction } from "@reduxjs/toolkit";

export const setActiveText = createAction("feature/setActiveText");
export const setImageForActiveText = createAction(
  "feature/setImageForActiveText"
);

export const fetchImageForActiveText = () => {
  return async (dispatch, getState) => {
    const activeText = getState().feature.activeText;
    const imageUrl = await yourAsyncFunction(activeText);
    dispatch(setImageForActiveText(imageUrl));
  };
};
