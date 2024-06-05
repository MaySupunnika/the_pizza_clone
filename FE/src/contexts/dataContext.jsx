import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selected, setSelected] = useState("Delivery");
  const [selectCard, setSelectCard] = useState(null);

  return (
    <DataContext.Provider
      value={{ selected, setSelected, selectCard, setSelectCard }}
    >
      {children}
    </DataContext.Provider>
  );
};
