import { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export const useRoute = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
  const [currentRouteName, setCurrentRouteName] = useState("");

  return (
    <RouteContext.Provider value={{ currentRouteName, setCurrentRouteName }}>
      {children}
    </RouteContext.Provider>
  );
};
