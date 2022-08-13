import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { form: { page: 1, visited: 0 } };

export const formToShowSlice = createSlice({
  name: "formToShow",
  initialState: initialStateValue,
  reducers: {
    nextForm: (state, action) => {
      state.form.page = action.payload;
      state.form.visited = action.payload - 1;
    },

    resetForm: (state) => {
      state.form = initialStateValue.form;
    },
  },
});

export const formToShowActions = formToShowSlice.actions;

export default formToShowSlice.reducer;
