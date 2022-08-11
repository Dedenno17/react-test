import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { form: { page: 1, visited: 0 } };

export const formToShowSlice = createSlice({
  name: "formToShow",
  initialState: initialStateValue,
  reducers: {
    nextForm: (state) => {
      state.form.page += 1;
      state.form.visited += 1;
    },

    resetForm: (state) => {
      state.form = initialStateValue.form;
    },
  },
});

export const formToShowActions = formToShowSlice.actions;

export default formToShowSlice.reducer;
