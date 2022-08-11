import { configureStore } from "@reduxjs/toolkit";

// reducers
import formToShowReducer from "../features/formToShow-slice";
import usersReducer from "../features/users-slice";
import userDataReducer from "../features/userData-slice";

const Store = configureStore({
  reducer: {
    formToShow: formToShowReducer,
    userData: userDataReducer,
    users: usersReducer,
  },
});

export default Store;
