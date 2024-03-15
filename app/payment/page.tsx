"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Divider from "@/components/Divider";
import Loader from "@/components/Loader";
import Payment from "@/components/Payment";
import Progress from "@/components/Progress";
import useCart from "@/hooks/useCart";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

const PaymentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalAmount = searchParams.get("totalAmount");
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

  return (
    <main className="container md:overflow-x-hidden">
      <div className="flex justify-center md:ml-[380px]">
        <Link
          href="/checkout"
          className="px-4 py-4 h-fit mr-4 mt-10 border border-[#e5e7eb] rounded-xl hover:bg-gray-200"
        >
          <ArrowUturnLeftIcon className="text-black w-5 h-5" />
        </Link>
        <Progress active="payment" />
      </div>

      <div className="flex justify-center w-full h-full">
        <div className="border border-gray-200 p-4 rounded-xl shadow">
          <h2 className="font-bold text-2xl mb-4 px-2 text-center">
            Select a Payment Method
          </h2>
          <Payment paymentMethods={cart.data?.paymentMethods} />
          <Divider className="m-2" label="" />
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl mb-4 px-2 text-center">
              Total Amount:{" "}
            </h2>
            <span className="text-emerald-600"> $ {totalAmount}</span>
          </div>
          <button
            className="bg-emerald-500 p-2 w-full text-white hover:bg-emerald-600 outline-none border-none rounded-xl font-bold text-medium"
            onClick={() => router.push("/confirmation")}
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
