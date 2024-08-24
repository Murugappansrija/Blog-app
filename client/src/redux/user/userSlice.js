import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  errorMessage: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.errorMessage = null;
    },
    logInFailure: (state, action) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});
export const { logInStart, logInSuccess, logInFailure } = userSlice.actions;

export default userSlice.reducer;
