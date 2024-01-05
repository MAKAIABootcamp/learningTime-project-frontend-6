import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import featureReducer from "./feature/featureSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feature: featureReducer,
  },
});

export default store;
