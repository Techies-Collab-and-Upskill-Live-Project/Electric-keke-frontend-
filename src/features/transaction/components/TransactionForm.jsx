import FormRow from "@/components/forms/FormRow";
import CheckBox from "@/components/forms/CheckBox";
import CardInformation from "./CardInformation";
import { RideCompletedModal } from "..";
import { useState } from "react";
import { useGlobalTransactContext } from "../contexts/TransactionContext";

const TransactionForm = () => {
  const {
    transactionForm: { name, region, save_data },
    handleChange,
  } = useGlobalTransactContext();

  return (
    <form className="payment-form" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-y-10 mb-10">
        <div className="pay-form-rows">
          <CardInformation />

          <FormRow
            label="Card holder name"
            name="name"
            value={name}
            handleChange={handleChange}
            labelClass="font-medium text-base"
            placeholder="Susan Michael"
            inputclass="payment-input"
          />

          <FormRow
            label="Country or Region"
            name="region"
            handleChange={handleChange}
            value={region}
            placeholder="Nigeria"
            inputclass="payment-input"
            labelClass="font-semibold text-base"
          />
        </div>

        <div className="border border-neutral-300 rounded-sm pl-5 pr-16 py-3">
          <CheckBox
            name="save_data"
            value={save_data}
            handleChange={handleChange}
            label="Securely save my information for 1 -click checkout"
            styling="flex gap-5 items-start"
            text={
              <>
                Pay faster on <span className="text-blue-700">flutterwave</span>{" "}
                and everywhere Link is accepted.
              </>
            }
            textStyle="text-xs mt-5"
          />
        </div>
      </div>

      <RideCompletedModal />
    </form>
  );
};

export default TransactionForm;
