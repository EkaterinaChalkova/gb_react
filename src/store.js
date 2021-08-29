import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile/profileSlice";

export default configureStore({
  reducer: {
    profile: profileReducer,
  },
});
