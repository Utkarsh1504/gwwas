type Props = {
  active: string;
};

const Progress: React.FC<Props> = (props) => {
  return (
    <nav className="w-full">
      <div className="md:w-full items-center my-10 p-2 border border-[#e5e7eb] rounded-xl shadow max-w-[700px]">
        <div className="w-full flex justify-between items-center font-medium">
          <span
            className={
              props.active === "checkout"
                ? "opacity-100 text-emerald-600 bg-emerald-100 p-2 border border-emerald-300 rounded-xl"
                : "opacity-50 hover:opacity-100 hover:text-emerald-500 transition ml-2 sm:text-xs"
            }
          >
            1. Checkout
          </span>
          <div className="border-2 border-b border-gray-400 w-1/3 md:w-1/4 lg:w-1/5"></div>
          <span
            className={
              props.active === "payment"
                ? "opacity-100 text-emerald-500 bg-emerald-100 p-2 border border-emerald-300 rounded-xl"
                : "opacity-50 hover:opacity-100 hover:text-emerald-500 transition p-2"
            }
          >
            2. Payment Method
          </span>
          <div className="border-2 border-b border-gray-400 w-1/3 md:w-1/4 lg:w-1/5"></div>
          <span
            className={
              props.active === "confirmation"
                ? "opacity-100 text-emerald-500 bg-emerald-100 p-2 border border-emerald-300 rounded-xl"
                : "opacity-50 hover:opacity-100 hover:text-emerald-500 transition p-2"
            }
          >
            3. Confirmation
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Progress;
