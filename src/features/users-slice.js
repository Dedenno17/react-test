import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialStateValue,
  reducers: {
    addUsers: (state, action) => {
      const newUsers = [...state.users, action.payload];
      state.users = newUsers;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
