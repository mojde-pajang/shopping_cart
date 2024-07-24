/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";

type shoppingCartProviderProps = {
  children: ReactNode
}

type shoppingCartContext = {
  openShopCart: () => void;
  closeShopCart: () => void;
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  getQuantity: (id: number) => number
  cartQuantity: number;
  cartItems: CartItem[];
}

type CartItem = {
  id: number;
  quantity: number;
}


const ShoppingCartContext = createContext({} as shoppingCartContext);


export function useShoppingCartContext() {
  const value = useContext(ShoppingCartContext);
  return value
}

export function ShoppingCartProvider({ children }: shoppingCartProviderProps) {

  const [items, setItems] = useState<CartItem[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  function getQuantity(id: number) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseQuantity(id: number) {
    if (items.find((item) => item.id === id) == null) {
      setItems(value => [...value, { id, quantity: 1 }])
    } else {
      setItems(currentItems => {
        return currentItems.map(currentItem => {
          if (currentItem.id == id) {
            return { ...currentItem, quantity: currentItem.quantity + 1 }
          }
          return currentItem;
        })
      })
    }
  }
  function decreaseQuantity(id: number) {
    if (items.find((item) => item.id === id)?.quantity == 1) {
      const newItems = items.filter(i => i.id !== id)
      setItems(newItems)
    } else {
      setItems(currentItems => {
        return currentItems.map(currentItem => {
          if (currentItem.id == id) {
            return { ...currentItem, quantity: currentItem.quantity - 1 }
          }
          else {
            return currentItem
          }
        })
      })
    }
  }

  function removeFromCart(id: number) {
    setItems(currentItems => currentItems.filter(i => i.id !== id))

  }

  const openShopCart = () => setIsOpen(true)

  const closeShopCart = () => setIsOpen(false)

  const cartQuantity = items.reduce((sum, current) => (current.quantity + sum), 0)

  return (<ShoppingCartContext.Provider value={{
    increaseQuantity,
    decreaseQuantity,
    getQuantity,
    removeFromCart,
    openShopCart,
    closeShopCart,
    cartItems: items,
    cartQuantity
  }}>
    {children}
  </ShoppingCartContext.Provider>)
}