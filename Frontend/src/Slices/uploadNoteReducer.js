import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "noteUpload",
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    noteUploadStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    noteUploadSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    noteUploadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { noteUploadStart, noteUploadSuccess, noteUploadFailure } =
  noteSlice.actions;

export default noteSlice.reducer;
