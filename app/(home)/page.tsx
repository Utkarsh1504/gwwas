"use client";

import React, { useContext } from "react";
import Loader from "@/components/Loader";
import Summary from "@/components/Summary";
import useCart from "@/hooks/useCart";
import UserDetails from "@/components/UserDetails";
import Promo from "@/components/Promo";
import { CartContext, CartContextType } from "@/context/cart";
import { Product } from "@/utils/types";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const CartPage: React.FC = () => {
  const { addItemToCart, deleteItemFromCart, cartArr } =
    useContext<CartContextType>(CartContext);

  const increaseQty = (product: Product) => {
    const newQty = product?.quantity + 1;
    const item = { ...product, quantity: newQty };

    if (newQty > Number(product.quantity)) return;

    addItemToCart(item);
  };

  const decreaseQty = (product: Product) => {
    const newQty = product?.quantity - 1;
    const item = { ...product, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const cart = useCart();
  if (cart.isLoading) {
    return (
      <>
        <div className="flex justify-center items-center mt-48">
          <Loader />
        </div>
      </>
    );
  }
  if (!cart.data) return null;

  const handleDetails = (location: string, mobile: string) => {
    console.log("Location:", location);
    console.log("Mobile:", mobile);
  };

  return (
    <main className="md:flex container mx-auto py-8 overflow-x-hidden">
      <div className="w-full md:h-fit md:w-1/2 m-4 p-4 border border-gray-300 shadow rounded-xl">
        <h2 className="font-bold text-2xl mb-4 px-2">Shopping Cart</h2>
        <div className="space-y-4">
          <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
            {cartArr?.map((product) => (
              <div key={product?.id}>
                <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                  <div className="w-full lg:w-2/5 xl:w-2/4">
                    <figure className="flex leading-5 gap-2">
                      <div>
                        <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <Image
                            width={100}
                            height={100}
                            src={product.image}
                            alt={product.title}
                          />
                        </div>
                      </div>
                      <figcaption className="ml-3">
                        <p>
                          <a href="#" className="hover:text-blue-600">
                            {product.title}
                          </a>
                        </p>
                        <p className="mt-1 text-gray-400">
                          {" "}
                          Product id: {product.id}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-24">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        className="p-2 mr-1 border border-[#e5e7eb] rounded-xl hover:bg-gray-200"
                        onClick={() => decreaseQty(product)}
                      >
                        <span className="m-auto text-2xl font-thin">
                          <MinusIcon className="w-5 h-5" />
                        </span>
                      </button>
                      <p className="p-2 mr-1 bg-emerald-500  border border-[#e5e7eb] rounded-xl hover:bg-emerald-600 text-white">
                        {product.quantity}
                      </p>
                      <button
                        data-action="increment"
                        className="p-2 mr-2 border border-[#e5e7eb] rounded-xl hover:bg-gray-200"
                        onClick={() => increaseQty(product)}
                      >
                        <span className="m-auto text-2xl font-thin">
                          <PlusIcon className="w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="leading-5">
                      <p className="font-semibold not-italic">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <small className="text-gray-400">
                        {" "}
                        ${product.price} / per item{" "}
                      </small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                      <button
                        className="p-2 mr-1 border border-[#e5e7eb] rounded-xl hover:bg-gray-200 cursor-pointer"
                        onClick={() => deleteItemFromCart(product?.id)}
                      >
                        <XMarkIcon className="text-red-500 w-5 h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
              </div>
            ))}
          </article>
        </div>
      </div>

      <div className="w-full md:w-1/2 my-4 h-fit border border-gray-300 shadow p-4 mx-4 rounded-xl">
        <UserDetails detailsProps={handleDetails} />
        <Promo />
        <h2 className="font-bold text-2xl mb-4 px-2">Summary</h2>
        <Summary products={cartArr} page="Checkout" />
      </div>
    </main>
  );
};

export default CartPage;
