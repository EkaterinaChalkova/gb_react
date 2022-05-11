import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    inputName: "",
    inputSurname: "",
  },
  reducers: {
    setNameSurname: (state, action) => {
      console.log(action);
      state.inputName = action.payload.inputName;

      state.inputSurname = action.payload.inputSurname;
      // state.value += 1;
      // state.lastMessageText = action.profile;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setNameSurname } = profileSlice.actions;

export default profileSlice.reducer;
