"use client";

import Progress from "@/components/Progress";
import {
  ArrowUturnLeftIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import Summary from "@/components/Summary";
import Link from "next/link";
import { CartContext, CartContextType } from "@/context/cart";
import { useContext, useEffect, useState } from "react";

type localObjType = {
  coupon: string | null,
  mobile: string | null,
  location: string | null,
}

function CheckOutPage() {
  const { cartArr } = useContext<CartContextType>(CartContext);
  const [localObj, setLocalObj] = useState<localObjType>({
    coupon: "",
    mobile: "",
    location:""
  });

  useEffect(() => {
    const coupon = localStorage.getItem("promoCode");
    const mobile = localStorage.getItem("mobile");
    const location = localStorage.getItem("location");

    setLocalObj({
      coupon:coupon,
      mobile:mobile,
      location:location
    });
  }, []);

  return (
    <main className="container overflow-x-hidden">
      <div className="flex justify-center w-full md:ml-[380px]">
        <Link
          href="/"
          className="px-4 py-4 h-fit mr-4 mt-10 border border-[#e5e7eb] rounded-xl hover:bg-gray-200"
        >
          <ArrowUturnLeftIcon className="text-black w-5 h-5" />
        </Link>

        <Progress active="checkout" />
      </div>

      <div>
        <div className="flex justify-center gap-4">
          <div className="w-full md:w-1/2 my-4 h-fit border border-gray-300 shadow p-4 mx-4 rounded-xl">
            <div className="px-4">
              <h2 className="text-lg font-semibold mb-4">User Details</h2>
              <div className="mb-4 flex items-center">
                <MapPinIcon className="h-6 w-6 text-gray-400 mr-3" />
                <span>{localObj.location}</span>
              </div>
              <div className="mb-4 flex items-center">
                <PhoneIcon className="h-6 w-6 text-gray-400 mr-3" />
                <span>{localObj.mobile}</span>
              </div>
            </div>
            <div className="px-4">
              <h2 className="text-lg font-semibold mb-2">Promo Code</h2>
              <p className="ml-1 text-emerald-600 font-semibold text-xs">
                {localObj.coupon !== "HIREME"
                  ? "No promo code"
                  : "HIREME (25% discount coupon applied)"}
              </p>
            </div>
            <div>
              <Summary products={cartArr} page="Payment" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CheckOutPage;
