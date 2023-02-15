import React from "react";
import Auth from "../screens/Auth";
import Home from "../screens/Home";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return <Home />;
};
