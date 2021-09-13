import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile/profileSlice";
import chatReducer from "./Chat/chatSlice";
import thunkMiddleware from "redux-thunk";

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
  },
  middleware: [thunkMiddleware],
});
