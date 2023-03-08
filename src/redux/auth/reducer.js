import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { id: null, name: "", stateChange: null },
  reducers: {
    updateProfile: (state, action) => ({
      ...state,
      id: action.payload.id,
      name: action.payload.name,
    }),
    stateChange: (state, action) => ({
      ...state,
      stateChange: action.payload.stateChange,
    }),
  },
});

export default authSlice;
