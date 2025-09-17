import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        // ถ้ามีสินค้าอยู่แล้ว → บวกจำนวน
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + (item.quantity || 1),
              }
            : cartItem
        );
      } else {
        // ถ้ายังไม่มี → เพิ่มใหม่
        return [...prev, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // ✅ ลดจำนวนทีละ 1
  const decreaseQty = (id) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // ถ้าเหลือ 0 ลบทิ้ง
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQty, removeFromCart, clearCart}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
