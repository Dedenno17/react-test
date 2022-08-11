import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { formPage: 1 };

export const formToShowSlice = createSlice({
  name: "formToShow",
  initialState: initialStateValue,
  reducers: {
    nextForm: (state) => {
      state.formPage += 1;
    },

    resetForm: (state) => {
      state.formPage = 0;
    },
  },
});

export const formToShowActions = formToShowSlice.actions;

export default formToShowSlice.reducer;
