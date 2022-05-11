import { createSlice } from "@reduxjs/toolkit";

export const Dog_API_URL = "https://dog.ceo/api/breeds/image/random";

export const dogSlice = createSlice({
  name: "dog",
  initialState: {
    loading: false,
    error: false,
    message: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { setLoading, setError, setMessage } = dogSlice.actions;
export default dogSlice.reducer;
