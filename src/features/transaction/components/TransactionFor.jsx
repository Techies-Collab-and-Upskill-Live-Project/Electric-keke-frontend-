import React from "react";
import Heading from "@/components/Heading";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "@/components/btn/Btn";
import { ArrowLeft } from "lucide-react";
import { goBack } from "@/utils/goBack";
import { useResource } from "@/hooks/useResource";
import TripDetails from "./TripDetails";

const TransactionFor = () => {
  const { resource: bookData } = useResource(
    () => console.log("logic to return at least a data"),
    "bookData"
  );


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
            dclass="text-sm"
          />

          <TripDetails containerStyle="trip-detail h-[180px] md:h-[223px] flex" />

          <div className="flex items-center justify-between gap-2 md:justify-start">
            <p className="text-xs font-semibold md:text-base">
              Total Cost of ride
            </p>
            <div className="ride-fare">&#8358; {bookData?.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFor;
