import MasterCircles from "@/assets/svg/MasterCircles";
import FormRow from "@/components/forms/FormRow";
import React from "react";

const CardInformation = () => {
  return (
    <div className="p-0">
      <span className="font-medium text-base">Card Information</span>
      <div className="">
        <FormRow inputclass="payment-input" icon={<MasterCircles />} iconPosition="right-3" />
        <div className="flex-center -mt-2">
          <FormRow styling="w-1/2" inputclass="payment-input" />
          <FormRow inputclass="payment-input" />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
