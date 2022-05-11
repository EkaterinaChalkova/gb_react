import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Profile/profileSlice";
import chatReducer from "./Chat/chatSlice";
import dogReducer from "./Dog/dogSlice";
import thunkMiddleware from "redux-thunk";

export default configureStore({
  reducer: {
    profile: profileReducer,
    chat: chatReducer,
    dog: dogReducer,
  },
  middleware: [thunkMiddleware],
});
