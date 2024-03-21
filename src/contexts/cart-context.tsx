"use client";
import { createContext, useContext, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addTocart: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addTocart = (productId: string) => {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId);
      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [...state, { productId, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ items: cartItems, addTocart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
