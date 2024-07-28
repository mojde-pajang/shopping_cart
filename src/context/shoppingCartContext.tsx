/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import ShopCartDrawer from "../components/ShopCartDawer/ShopCartDrawer";
import { ProductProps } from "../pages/Shop/component/ShopCart";
import useLocalStorage from "../hooks/useLocalStorage";

type shoppingCartProviderProps = {
  children: ReactNode
}

type shoppingCartContext = {
  openShopCart: () => void;
  closeShopCart: () => void;
  increaseQuantity: (product: ProductProps) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  getQuantity: (id: number) => number
  cartQuantity: number;
  cartItems: CartItemProps[];
}

export type CartItemProps = {
  id: number;
  price: number;
  quantity: number;
}


const ShoppingCartContext = createContext({} as shoppingCartContext);


export function useShoppingCartContext() {
  const value = useContext(ShoppingCartContext);
  return value
}

export function ShoppingCartProvider({ children }: shoppingCartProviderProps) {

  const [items, setItems] = useLocalStorage<CartItemProps[]>("products", []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);

  function getQuantity(id: number) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseQuantity(product: ProductProps) {
    if (items.find((item) => item.id === product.id) == null) {
      setItems(value => [...value, { id: product.id, quantity: 1, price: product.price }])
    } else {
      setItems(currentItems => {
        return currentItems.map(currentItem => {
          if (currentItem.id == product.id) {
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
    <ShopCartDrawer isOpen={isOpen} />
  </ShoppingCartContext.Provider>)
}