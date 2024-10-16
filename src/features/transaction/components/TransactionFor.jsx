import React, { useState } from "react";
import Trip from "./Trip";
import { getItemFromLs } from "../../../utils/ls";
import Heading from "@/components/Heading";
import ProgressLine from "@/components/ProgressLine";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "@/components/btn/Btn";
import { ArrowLeft } from "lucide-react";
import { goBack } from "@/utils/goBack";

const TransactionFor = () => {
  const [currentRide, setCurrentRide] = useState(getItemFromLs("current-ride"));

  return (
    <div className="board__payment-for">
      <div>
        <div className="transaction-head">
          <Btn
            icon={<ArrowLeft color="black" />}
            styling="bg-transparent p-0 size-6"
            onClick={goBack}
          />
          <LogoPlain logoStyling="w-20 h-14" />
        </div>

        <div className="md:mt-10">
          <Heading
            title="Payment"
            description="How would you like to make your payment "
            tclass="font-josefin text-[2rem] font-bold"
            dclass="mt-3 text-sm"
          />

          <div className="trip-detail">
            <Trip label="Pick up" location={currentRide?.origin || "orile"} />
            <ProgressLine className="hidden md:block md:h-[80px]" />
            <Trip
              label="Drop off"
              location={currentRide?.destination || "mile 2"}
            />
          </div>

          <div className="flex items-center justify-between md:justify-start gap-2">
            <p className="font-semibold text-xs md:text-base">
              Total Cost of ride
            </p>
            <div className="ride-fare">NGN{currentRide?.price || 300}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFor;
