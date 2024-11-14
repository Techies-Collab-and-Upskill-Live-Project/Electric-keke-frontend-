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
    <div>
      <span className="text-base font-medium">Card Information</span>
      <div className="">
        <FormRow
          inputclass="pay-card-input rounded-t-sm"
          name="number"
          value={number}
          handleChange={handleChange}
          icon={MasterCircles}
          iconPosition="right-3"
        />

        <div className="grid grid-cols-2 -mt-2">
          <FormRow
            name="expiry"
            value={expiry}
            handleChange={handleChange}
            styling="w-full"
            inputclass="pay-card-input rounded-es-sm"
          />

          <FormRow
            name="cvv"
            value={cvv}
            handleChange={handleChange}
            styling="w-full"
            inputclass="pay-card-input rounded-ee-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
