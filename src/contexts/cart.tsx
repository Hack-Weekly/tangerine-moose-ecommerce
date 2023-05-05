import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import useLocalStorage from "~/hooks/useLocalStorage";
import type { CartItem } from "~/types/cart";
import type { Product, Variant } from "~/types/product";

type CartFnProps = {
  id: Product["id"];
  variantId?: Variant["id"];
};

type CartContextProps = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number, variant?: Variant) => void;
  removeFromCart: ({ id, variantId }: CartFnProps) => void;
  clearCart: () => void;
  increaseQuantity: ({ id, variantId }: CartFnProps) => void;
  decreaseQuantity: ({ id, variantId }: CartFnProps) => void;
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

const isExistingItem = (item: CartItem, id: Product["id"], variantId?: Variant["id"]) =>
  item.id == id && item.variant?.id == variantId;

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
    return cartItems.reduce(
      (acc, item) => acc + (item.variant ? item.quantity * item.variant.price : item.quantity * item.price),
      0,
    );
  }, [cartItems, isMounted]);

  const increaseQuantity = ({ id, variantId }: CartFnProps) => {
    setCartItems((currItems) =>
      currItems.map((item) => (isExistingItem(item, id, variantId) ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  };

  const decreaseQuantity = ({ id, variantId }: CartFnProps) => {
    setCartItems((currItems) =>
      currItems.map((item) => (isExistingItem(item, id, variantId) ? { ...item, quantity: item.quantity - 1 } : item)),
    );
  };

  const addToCart = (product: Product, quantity = 1, variant?: Variant) => {
    setCartItems((currItems) => {
      const itemInCart = currItems.find((item) => isExistingItem(item, product.id, variant?.id));

      if (!itemInCart) {
        return [
          ...currItems,
          {
            id: product.id,
            name: product.name,
            image_url: product.image_url,
            variant: variant,
            ...(variant && { variant: variant }),
            price: variant?.price || product.base_price,
            quantity: quantity,
          },
        ];
      } else {
        // item already in cart, find item, update quantity
        return currItems.map((item) => {
          if (isExistingItem(item, product.id, variant?.id)) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = ({ id, variantId }: CartFnProps) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id || item.variant?.id !== variantId));
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
