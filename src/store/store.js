import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import featureReducer from "./feature/featureSlice";
import priceReducer from "./price/priceSlice";
import donationReducer from "./donations/donationSlice";
import courseReducer from "./course/courseSlice";
import infoDonationReducer from "./infoDonation/infoDonationSlice";
import personalInformationReducer from "./personalInformation/personalInformationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feature: featureReducer,
    price: priceReducer,
    donation: donationReducer,
    course: courseReducer,
    infoDonation: infoDonationReducer,
    personalInformation: personalInformationReducer,
  },
});

export default store;
