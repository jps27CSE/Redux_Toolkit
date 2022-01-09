import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    phone: "",
  },
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = true;
      state.phone = action.payload;
    },
  },
});

console.log("authSlice ", authSlice);
