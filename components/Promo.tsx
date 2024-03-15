import React, { useEffect, useState } from "react";

const Promo: React.FC = () => {
  const [promoCode, setPromoCode] = useState<string>(
    () => localStorage.getItem("promoCode") || ""
  );
  const [applied, setApplied] = useState<boolean>(() => {
    const storedApplied = localStorage.getItem("applied");
    return storedApplied ? JSON.parse(storedApplied) : false;
  });

  const handleApply = () => {
    setApplied(true);
    window.location.reload();
  };

  const handleRemove = () => {
    setApplied(false);
    setPromoCode("");
    localStorage.removeItem("promoCode");
    localStorage.removeItem("applied");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("promoCode", promoCode);
  }, [promoCode]);

  useEffect(() => {
    localStorage.setItem("applied", JSON.stringify(applied));
  }, [applied]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Promo Code</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="HIREME"
        />
        {!applied && (
          <button
            onClick={handleApply}
            className="h-fit inset-y-0 right-0 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
          >
            Apply
          </button>
        )}
        {applied && (
          <button
            onClick={handleRemove}
            className="h-fit  inset-y-0 right-0 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Remove
          </button>
        )}
      </div>
      {applied && (
        <p className="mt-1 ml-1 text-emerald-600 font-semibold text-xs">
          congrats!! 25% discount applied
        </p>
      )}
    </div>
  );
};

export default Promo;
