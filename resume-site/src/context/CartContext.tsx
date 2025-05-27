import { createContext, useEffect, useState } from 'react';
import { CartItem } from '../interfaces/CartItem';

interface CartContextType {
  cart: CartItem[];
  setCart: (items: CartItem[]) => void;
  updateCart: (updater: (prev: CartItem[]) => CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  removeItem: (title: string, size: string) => void;
  incrementItem: (title: string, size: string) => void;
  decrementItem: (title: string, size: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCartState] = useState<CartItem[]>([]);
  const localKey = 'sean-donny-shopping-cart';

  useEffect(() => {
    const stored = localStorage.getItem(localKey);
    if (stored) setCartState(JSON.parse(stored));
  }, []);

  // Sync across tabs
  useEffect(() => {
    const syncCartAcrossTabs = () => {
      const stored = localStorage.getItem(localKey);
      if (stored) setCartState(JSON.parse(stored));
    };
    window.addEventListener('storage', syncCartAcrossTabs);
    return () => window.removeEventListener('storage', syncCartAcrossTabs);
  }, []);

  const setCart = (items: CartItem[]) => {
    setCartState(items);
    localStorage.setItem(localKey, JSON.stringify(items));
  };

  const updateCart = (updater: (prev: CartItem[]) => CartItem[]) => {
    setCartState(prev => {
      const updated = updater(prev);
      localStorage.setItem(localKey, JSON.stringify(updated));
      return updated;
    });
  };

  const addToCart = (newItem: CartItem) => {
    updateCart(prev => {
      const existing = prev.find(
        item => item.title === newItem.title && item.size === newItem.size,
      );
      if (existing) {
        return prev.map(item =>
          item.title === newItem.title && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (title: string, size: string) => {
    updateCart(prev =>
      prev.filter(item => !(item.title === title && item.size === size)),
    );
  };

  const incrementItem = (title: string, size: string) => {
    updateCart(prev =>
      prev.map(item =>
        item.title === title && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decrementItem = (title: string, size: string) => {
    updateCart(prev =>
      prev
        .map(item =>
          item.title === title && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartState([]); // Clear cart here
    localStorage.removeItem(localKey);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        updateCart,
        addToCart,
        removeItem,
        incrementItem,
        decrementItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
