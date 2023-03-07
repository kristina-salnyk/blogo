import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: null, name: "" },
  reducers: {
    updateProfile: (state, action) => ({ ...state, id: action.payload.id }),
  },
});

export default authSlice;
