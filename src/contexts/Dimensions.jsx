import { createContext, useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";

const DimensionsContext = createContext();

export const useDimensions = () => useContext(DimensionsContext);

export const DimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
  }, []);

  return (
    <DimensionsContext.Provider value={{ dimensions }}>
      {children}
    </DimensionsContext.Provider>
  );
};
