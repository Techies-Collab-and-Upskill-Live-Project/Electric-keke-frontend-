import FormRow from "@/components/forms/FormRow";
import Btn from "@/components/btn/Btn";
import CheckBox from "@/components/forms/CheckBox";
import CardInformation from "./CardInformation";
import { RateRiderModal } from "@/features/booking";
import { RideCompletedModal } from "..";

const PaymentForm = () => {
  return (
    <form className="payment-form">
      <div className="flex flex-col gap-y-10 mb-10">
        <div className="pay-form-rows">
          <CardInformation />

          <FormRow
            label="Card holder name"
            labelClass="font-medium text-base"
            placeholder="Susan Michael"
            inputclass="payment-input"
          />

          <FormRow
            label="Country or Region"
            placeholder="Nigeria"
            inputclass="payment-input"
            labelClass="font-semibold text-base"
          />
        </div>

        <div className="border border-neutral-300 rounded-sm pl-5 pr-16 py-3">
          <CheckBox
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

export default PaymentForm;
