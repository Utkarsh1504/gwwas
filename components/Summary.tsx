import React, { useEffect, useState } from "react";
import { Product } from "@/utils/types";
import Divider from "./Divider";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  products: Product[];
  page: string;
};

function Summary(props: Props) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const navigate = useRouter();

  const totalCost = props.products.reduce((acc, prod) => {
    return acc + prod.quantity * prod.price;
  }, 0);

  const applied = localStorage.getItem("applied");
  useEffect(() => {
    if (applied === "true") {
      const discount = totalCost * 0.25;
      setTotalDiscount(discount);
      setTotalAmount(totalCost - discount + 10);
    } else {
      setTotalDiscount(0);
      setTotalAmount(totalCost + 10);
    }
  }, [applied]);
  // const navigate = useRouter();

  // const totalCost = props.products.reduce((acc, prod) => {
  //   return acc + prod.quantity * prod.price;
  // }, 0);

  // const totalDiscount = (totalCost*0.25)

  // const totalAmount = (Number(totalCost) - Number(totalDiscount) + 10).toFixed(2);

  return (
    <div className="w-full rounded-lg">
      <div className="py-4 px-4">
        <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
        <Divider className="my-2" label="" />
        <div className="space-y-2">
          <div className="flex justify-between text-medium opacity-55">
            <p className="font-semibold ">Order Amount</p>
            <p className="opacity-60 font-bold">${totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-medium opacity-55">
            <p className="font-semibold">Delivery Fee</p>
            <p className="opacity-60 font-bold">{"$10.00"}</p>
          </div>
          <div className="flex justify-between text-medium opacity-55">
            <p className="font-semibold">Discount</p>
            <p className="opacity-60 font-bold">${totalDiscount.toFixed(2)}</p>
          </div>
        </div>

        <Divider className="mt-2" label="" />
        <div className="flex items-center justify-between my-4">
          <h6 className="font-bold text-lg">Total</h6>
          <h6 className="text-emerald-500 font-bold">
            ${totalAmount.toFixed(2)}
          </h6>
        </div>
        <Link
          href={{
            pathname: `/${props.page.toLowerCase()}`,
            query: {
              totalAmount: totalAmount.toFixed(2),
            },
          }}
        >
          <button className="bg-emerald-500 p-2 w-full text-white hover:bg-emerald-600 outline-none border-none rounded-xl font-bold text-medium">
            {props.page === "Payment" ? "Make a payment" : "Checkout"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Summary;
