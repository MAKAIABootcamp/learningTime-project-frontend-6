import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import featureReducer from "./feature/featureSlice";
import priceReducer from "./price/priceSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feature: featureReducer,
    price: priceReducer,
  },
});

export default store;
