"use client";

import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="rounded-lg w-full h-full flex items-center justify-center">
      <BounceLoader color="#00b185" size={40} />
    </div>
  );
};

export default Loader;
