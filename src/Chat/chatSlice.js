import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    MessagesArray: [
      {
        time: "20:47:25",
        msg: "Hi I`m Kate",
        user: "Kate",
        chatId: "1",
      },
      {
        time: "20:43:25",
        msg: "Hi I`m Pit",
        user: "Pit",
        chatId: "2",
      },
      {
        time: "19:47:25",
        msg: "Hi I`m Andrey",
        user: "Andrey",
        chatId: "3",
      },
    ],
  },
  reducers: {
    AddMessage: (state, action) => {
      state.MessagesArray = [
        ...state.MessagesArray,
        {
          time: action.payload.time,
          msg: action.payload.msg,
          user: action.payload.user,
          chatId: action.payload.chatId,
        },
      ];
      console.log(action.payload);
    },
  },
});

export const { AddMessage } = chatSlice.actions;

export default chatSlice.reducer;
