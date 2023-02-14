import React from "react";
import Auth from "../screens/Auth";
import Home from "../screens/Home";
import { RouteProvider } from "../contexts/Route";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return <Auth />;
  }
  return (
    <RouteProvider>
      <Home />
    </RouteProvider>
  );
};
