import Progress from "@/components/Progress";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <>
      <div className="flex justify-center md:ml-[380px]">
        <Link
          href="/payment"
          className="px-4 py-4 h-fit mr-4 mt-10 border border-[#e5e7eb] rounded-xl hover:bg-gray-200"
        >
          <ArrowUturnLeftIcon className="text-black w-5 h-5" />
        </Link>
        <Progress active="confirmation" />
      </div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
            Payment Successful
          </h2>
          <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
            Thank you for making a purchase from our store.
          </p>
        </div>
      </section>
    </>
  );
}
