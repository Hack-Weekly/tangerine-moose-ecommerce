import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const increaseQuantity = (id: Product["id"]) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.product.id === id) {
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
        if (item.product.id === id) {
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
          if (item.product.id === product.id) {
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
      return currItems.filter((item) => item.product.id !== id);
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
