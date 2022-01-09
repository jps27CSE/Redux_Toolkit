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
    setLogout: (state, action) => {
      state.isAuthenticated = false;
      state.phone = "";
    },
  },
});

console.log("authSlice ", authSlice);
