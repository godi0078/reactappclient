import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import citySlice from "./features/city/citySlice";
import listSlice from "./features/list/listSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    city: citySlice,
    list: listSlice,
  },
});
