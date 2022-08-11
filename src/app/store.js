import { configureStore } from "@reduxjs/toolkit";

// reducers
import formToShowReducer from "../features/formToShow-slice";

const Store = configureStore({
  reducer: {
    formToShow: formToShowReducer,
  },
});

export default Store;
