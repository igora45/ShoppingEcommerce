import React, { createContext } from 'react';
import { PRODUCTS } from '../pages/shop/products';
import { useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

interface IContextValue {
  cartItems: any | null;
  addToCart: any | null;
  removeFromCart: any | null;
  updateCartItemCount: any | null;
  getTotalCartAmount: any | null;
}
export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount: any, itemId: any) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let totalAmount: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: any = PRODUCTS.find(
          product => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue: IContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
