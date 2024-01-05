import { createAction } from "@reduxjs/toolkit";

export const setActiveText = createAction("feature/setActiveText");
export const setImageForActiveText = createAction(
  "feature/setImageForActiveText"
);

export const fetchImageForActiveText = () => {
  return async (dispatch, getState) => {
    const activeText = getState().feature.activeText;
    // Lógica asíncrona para obtener la URL de la imagen según activeText
    const imageUrl = await yourAsyncFunction(activeText); // Reemplaza con tu lógica asíncrona
    dispatch(setImageForActiveText(imageUrl));
  };
};
