import React from "react";
import Auth from "../navigation/Auth";
import Home from "../navigation/Home";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return <Home />;
};
