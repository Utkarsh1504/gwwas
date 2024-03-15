"use client";
import { CalendarDaysIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  paymentMethods: string[];
};

function Payment(props: Props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    props.paymentMethods[0]
  );
  const router = useRouter();

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <main>
      <div className="flex justify-center mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded-full ${
            selectedPaymentMethod === props.paymentMethods[1]
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handlePaymentMethodChange(props.paymentMethods[1])}
        >
          Card
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            selectedPaymentMethod === props.paymentMethods[0]
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handlePaymentMethodChange(props.paymentMethods[0])}
        >
          UPI
        </button>
      </div>
      {selectedPaymentMethod === props.paymentMethods[1] && (
        <div className="cards space-y-6">
          <h3 className="text-xl font-bold">Debit/Credit Card</h3>
          <form className="max-w-sm">
            <label htmlFor="card-number-input" className="sr-only">
              Card number:
            </label>
            <div className="relative">
              <input
                style={{ color: "black" }}
                type="text"
                id="card-number-input"
                className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Card Number"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4 my-4">
              <div className="relative max-w-sm col-span-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <CalendarDaysIcon className="w-5 h-5 text-black" />
                </div>
                <label htmlFor="card-expiration-input" className="sr-only">
                  Card expiration date:
                </label>
                <input
                  style={{ color: "black" }}
                  id="card-expiration-input"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Expiry MM/YY"
                  required
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="cvv-input" className="sr-only">
                  Card CVV code:
                </label>
                <input
                  style={{ color: "black" }}
                  type="number"
                  id="cvv-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      )}
      {selectedPaymentMethod === props.paymentMethods[0] && (
        <div className="upi space-y-6 py-2">
          <h3 className="font-bold text-xl text-slate-700">UPI</h3>
          <label htmlFor="upi-id-input" className="sr-only">
            Enter your UPI ID :
          </label>
          <div className="relative ">
            <div className=" flex gap-4 items-center">
              <input
                style={{ color: "black" }}
                type="text"
                id="upi-id-input"
                className=" max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="UPI ID"
                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                required
              />
              <div className="max-w-[100px]">
                <button
                  className="bg-emerald-500 p-2 w-full text-white hover:bg-emerald-600 outline-none border-none rounded-xl font-bold text-medium"
                  onClick={() => router.push("/checkout")}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Payment;
