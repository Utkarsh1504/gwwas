"use client";

import getCart from "@/app/api/index";
import { Product } from "@/utils/types";
import { createContext, useState, useEffect, ReactNode } from "react";

export type CartContextType = {
  cartArr: Product[];
  addItemToCart: (item: Product) => void;
  deleteItemFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartArr, setCartArr] = useState<Product[]>([]);

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    const storedCart = localStorage.getItem("cart");
  
    if (storedCart) {
      const parsedCart: { cartItems: Product[] } = JSON.parse(storedCart);
      
      if (parsedCart.cartItems.length === 0) {
        fetchCartFromAPI();
      } else {
        setCartArr(parsedCart.cartItems);
      }
    } else {
      fetchCartFromAPI();
    }
  };
  
  const fetchCartFromAPI = () => {
    getCart()
      .then((data) => {
        localStorage.setItem(
          "cart",
          JSON.stringify({ cartItems: data.products })
        );
        setCartArr(data.products);
      })
      .catch((error) => {
        console.error("Failed to fetch cart:", error);
      });
  };
  

  // const setCartToState = () => {
  //   const storedCart = localStorage.getItem("cart");
  //   console.log(storedCart);
  //   if (storedCart) {
  //     const parsedCart: { cartItems: Product[] } = JSON.parse(storedCart);
  //     setCartArr(parsedCart.cartItems);
  //   } else {
  //     getCart()
  //       .then((data) => {
  //         console.log("api fetching");
  //         localStorage.setItem(
  //           "cart",
  //           JSON.stringify({ cartItems: data.products })
  //         );
  //         setCartArr(data.products);
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch cart:", error);
  //       });
  //   }
  // };

  const addItemToCart = ({
    id,
    title,
    price,
    image,
    quantity = 1,
  }: Product) => {
    const item: Product = {
      id,
      title,
      price,
      image,
      quantity,
    };

    const isItemExist = cartArr.find((product) => product.id === item.id);

    let newCartItems: Product[];

    if (isItemExist) {
      newCartItems = cartArr.map((product) =>
        product.id === isItemExist.id ? item : product
      );
    } else {
      newCartItems = [...cartArr, item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id: number) => {
    const newCartItems = cartArr.filter((product) => product.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cartArr,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
