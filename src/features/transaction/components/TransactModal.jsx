import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Btn from "../../../components/btn/Btn";
import { useGlobalTransactContext } from "../contexts/TransactionContext";
import dispatchables from "@/utils/dispatchables";
import transaction_processing from "@/assets/animations-data/processing-transaction.json";
import transaction_done from "@/assets/animations-data/transaction-done.json";
import Lottie from "lottie-react";
import IconWrapper from "@/components/IconWrapper";

const TransactModal = ({ setRateDriver }) => {
  const { showAlert } = dispatchables();
  const [paySuccessful, setPaySuccessful] = useState(false);
  const { transactionForm } = useGlobalTransactContext();
  // grab the data from the transaction form and create logic that verifies payment
  useEffect(() => {
    const time_out = setTimeout(() => {
      showAlert("payment successful");
      setPaySuccessful(true);
    }, 5000);

    return () => clearTimeout(time_out);
  }, []);

  return (
    <>
      <div className="text-center">
        <IconWrapper
          iconElement={Lottie}
          iconElementProps={{
            animationData: paySuccessful
              ? transaction_done
              : transaction_processing,
            loop: paySuccessful ? false : true,
          }}
          containerStyle={`${
            paySuccessful ? "w-20" : "w-40 h-20 flex-center"
          } mx-auto border p-0`}
        />

        <Heading
          className="mt-3 lg:mt-6"
          title={paySuccessful ? "Great Job" : "One Moment "}
          tclass="font-bold text-2xl md:text-[28px]"
          description={`your payment ${
            paySuccessful ? "was successfull" : "is processing..."
          }`}
          dclass="mt-3 md:mt-6 text-eiteen"
        />
      </div>

      {paySuccessful && (
        <div className="w-full max-w-[488px] mt-4 md:mt-10 mx-auto px-20">
          <Btn
            text="Proceed"
            styling="btn btn--primary btn--hero w-full"
            onClick={() => setRateDriver(true)}
          />
        </div>
      )}
    </>
  );
};

export default TransactModal;
