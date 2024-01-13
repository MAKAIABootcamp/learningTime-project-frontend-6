// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import featureReducer from "./feature/featureSlice";
import priceReducer from "./price/priceSlice";
import donationReducer from "./donations/donationSlice";
import courseReducer from "./course/courseSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feature: featureReducer,
    price: priceReducer,
    donation: donationReducer,
    course: courseReducer,
  },
});

export default store;
