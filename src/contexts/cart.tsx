import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import useLocalStorage from "~/hooks/useLocalStorage";
import { type CartItem } from "~/types/cart";
import { type Product } from "~/types/product";

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: Product["id"]) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  totalQuantity: number;
};

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  increaseQuantity: () => undefined,
  decreaseQuantity: () => undefined,
  totalQuantity: 0,
});

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("tangerine-moose-cart", []);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const totalQuantity = useMemo(() => {
    if (!isMounted) return 0;
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems, isMounted]);

  const increaseQuantity = (id: Product["id"]) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseQuantity = (id: Product["id"]) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const addToCart = (product: Product) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id) == null) {
        return [...currItems, { id: product.id, product, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: Product["id"]) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
