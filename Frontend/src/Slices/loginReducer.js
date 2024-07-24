import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  userInfo: null,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    loginStart(state) {
      (state.loading = true), (state.error = null);
    },
    loginSuccess(state, action) {
      (state.loading = false), (state.userInfo = action.payload);
    },
    loginFailure(state, action) {
      (state.loading = false), (state.error = action.payload);
    },
    userLogOut(state) {
      state.userInfo = null;
    },
  },
});

export default userLoginSlice.reducer;

export const { loginStart, loginSuccess, loginFailure ,userLogOut} = userLoginSlice.actions;
