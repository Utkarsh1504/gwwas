"use client";
import { ArrowPathIcon, MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-white text-gray-900 py-2 border-b border-[#e5e7eb]">
      <div
        className="container mx-auto flex justify-between items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center ml-6">
          <Image
            src="https://groww.in/groww-logo-270.png"
            alt="logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="text-lg font-semibold">GROWW</h1>
        </div>
        <div className="flex items-center p-4 mr-4">
          <button className="p-2 mr-4 border border-[#e5e7eb] rounded-xl hover:bg-gray-200">
            <SunIcon className="text-black opacity-55 hover:text-emerald-500 hover:opacity-100 w-6 h-6" />
          </button>
          <button className="p-2 mr-4 border border-[#e5e7eb] rounded-xl hover:bg-gray-200">
            <MoonIcon className="text-black opacity-55 hover:text-emerald-500 hover:opacity-100 w-6 h-6" />
          </button>
          <button onClick={()=>{window.location.reload()}} className="p-2 mr-4 border border-[#e5e7eb] rounded-xl hover:bg-gray-200">
            <ArrowPathIcon className="text-emerald-500 opacity-55 hover:opacity-100 w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
