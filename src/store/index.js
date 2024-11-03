import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import globalSlice from "./slices/global-slice";
import formDataSlice from "./slices/form-data-slice";
import bookrideSlice from "./slices/bookride-slice";
import notificationSlice from "./slices/notification-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalSlice,
    formData: formDataSlice,
    bookData: bookrideSlice,
    notificationData: notificationSlice
  },
});

export default store;
