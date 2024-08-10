import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [selected, setSelected] = useState("Delivery");
  const [selectCard, setSelectCard] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      let updatedCart;
      if (existingItem) {
        updatedCart = prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
                totalPrice: (cartItem.quantity + item.quantity) * item.price,
              }
            : cartItem
        );
      } else {
        updatedCart = [...prevCart, item];
      }

      console.log("Updated Cart:", updatedCart); // ลอง log ข้อมูลที่ถูกอัปเดต
      return updatedCart;
    });
  };

  return (
    <DataContext.Provider
      value={{
        selected,
        setSelected,
        selectCard,
        setSelectCard,
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
