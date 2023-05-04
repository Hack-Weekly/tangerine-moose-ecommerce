import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import useLocalStorage from "~/hooks/useLocalStorage";
import { type CartItem } from "~/types/cart";
import { type Product, type Variant } from "~/types/product";

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (product: Product, variant: Variant, quantity: number) => void;
  removeFromCart: (id: Product["id"], variantId: Variant["id"]) => void;
  clearCart: () => void;
  increaseQuantity: (id: Product["id"], variantId: Variant["id"]) => void;
  decreaseQuantity: (id: Product["id"], variantId: Variant["id"]) => void;
  totalQuantity: number;
  totalPrice: number;
};

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => undefined,
  removeFromCart: () => undefined,
  clearCart: () => undefined,
  increaseQuantity: () => undefined,
  decreaseQuantity: () => undefined,
  totalQuantity: 0,
  totalPrice: 0,
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

  const totalPrice = useMemo(() => {
    if (!isMounted) return 0;
    return cartItems.reduce((acc, item) => acc + item.quantity * item.variant.price, 0);
  }, [cartItems, isMounted]);

  const increaseQuantity = (id: Product["id"], variantId: Variant["id"]) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id && item.variant.id === variantId) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseQuantity = (id: Product["id"], variantId: Variant["id"]) => {
    setCartItems((currItems) => {
      return currItems.map((item) => {
        if (item.id === id && item.variant.id === variantId) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const addToCart = (product: Product, variant: Variant, quantity = 1) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === product.id && item.variant.id === variant.id);
      if (!existingItem) {
        return [
          ...currItems,
          {
            id: product.id,
            name: product.name,
            image_url: product.image_url,
            variant: variant,
            price: variant.price,
            quantity: quantity,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === product.id && item.variant.id === variant.id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: Product["id"], variantId: Variant["id"]) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id || item.variant.id !== variantId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
