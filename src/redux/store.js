import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/reducer";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
