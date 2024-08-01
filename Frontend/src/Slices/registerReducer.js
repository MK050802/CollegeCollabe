import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  userInfo: null,
};

export const userRegisterSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    registrationStart(state) {
      (state.loading = true), (state.error = null);
    },
    registrationSuccess(state, action) {
      (state.loading = false), (state.userInfo = action.payload);
    },
    registrationFailure(state, action) {
      (state.loading = false), (state.error = action.payload);
    },
  },
});

export default userRegisterSlice.reducer;

export const { registrationStart, registrationSuccess, registrationFailure } =
  userRegisterSlice.actions;