import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    loading: false,
    notes: [],
    error: null,
  },
  reducers: {
    getAllNotesStart(state) {
      state.loading = true;
    },
    getAllNotesSuccess(state, action) {
      state.loading = false;
      state.notes = action.payload;
    },
    getAllNotesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getAllNotesStart, getAllNotesSuccess, getAllNotesFailure } =
  notesSlice.actions;
export default notesSlice.reducer;
