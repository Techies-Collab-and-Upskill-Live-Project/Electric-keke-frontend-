import MasterCircles from "@/assets/svg/MasterCircles";
import FormRow from "@/components/forms/FormRow";
import React from "react";
import { useGlobalTransactContext } from "../contexts/TransactionContext";

const CardInformation = () => {
  const {
    transactionForm: { number, cvv, expiry },
    handleChange,
  } = useGlobalTransactContext();

  return (
    <div className="p-0">
      <span className="font-medium text-base">Card Information</span>
      <div className="">
        <FormRow
          inputclass="payment-input"
          name="number"
          value={number}
          handleChange={handleChange}
          icon={<MasterCircles />}
          iconPosition="right-3"
        />
        <div className="flex-center -mt-2">
          <FormRow
            name="expiry"
            value={expiry}
            handleChange={handleChange}
            styling="w-1/2"
            inputclass="payment-input"
          />
          <FormRow
            name="cvv"
            value={cvv}
            handleChange={handleChange}
            inputclass="payment-input"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
