import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure, addUser } =
  userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
