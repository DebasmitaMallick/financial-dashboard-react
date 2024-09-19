import React from "react";
import usePriceDetailsContext from "./context/PriceDetailsProvider";

const PriceDetails = () => {
  const {
    closeValue: { first, last },
  } = usePriceDetailsContext();

  console.log("first last", first, last);

  const increaseInValue = last - first;
  const percentageIncrease = ((last - first) / first) * 100;
  return (
    <div className="pb-10">
      <div className="relative w-[247px]">
        <h1 className="text-[70px] text-[#1A243A] font-semibold">{last}</h1>
        <p className="absolute top-3 right-0 text-[24px] text-[#BDBEBF] font-semibold">
          USD
        </p>
      </div>
      <p className="text-[#67BF6B] text-[18px] font-semibold">
        {increaseInValue >= 0 ? "+" : "-"}{" "}
        {Math.abs(increaseInValue).toFixed(2)} (
        {Math.abs(percentageIncrease).toFixed(2)}%)
      </p>
    </div>
  );
};

export default PriceDetails;
