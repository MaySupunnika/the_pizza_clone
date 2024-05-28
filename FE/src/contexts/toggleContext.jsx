import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [selected, setSelected] = useState("Delivery");

  return (
    <ToggleContext.Provider value={{ selected, setSelected }}>
      {children}
    </ToggleContext.Provider>
  );
};
