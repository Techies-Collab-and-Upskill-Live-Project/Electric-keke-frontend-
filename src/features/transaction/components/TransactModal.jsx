import Congrats from "@/assets/svg/Congrats";
import Loader from "@/components/loaders/Loader";
import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import Btn from "../../../components/btn/Btn";
import { useGlobalTransactContext } from "../contexts/TransactionContext";
import dispatchables from "@/utils/dispatchables";

const TransactModal = ({ setRateDriver }) => {
  const { showAlert } = dispatchables();
  const [paySuccessful, setPaySuccessful] = useState(false);
  const { transactionForm } = useGlobalTransactContext();
// transaction form holds the details to utilize for the the server 
  useEffect(() => {
    const time_out = setTimeout(() => {
      showAlert('payment successful');
      setPaySuccessful(true);
    }, 5000);

    return () => clearTimeout(time_out);
  });
  return (
    <>
      <div className="text-center">
        <div className="size-20 mx-auto">
          {paySuccessful ? <Congrats /> : <Loader />}
        </div>

        <Heading
          className="mt-6"
          title={paySuccessful ? "Great Job" : "One Moment "}
          tclass="font-bold text-2xl md:text-[28px]"
          description={`your payment ${
            paySuccessful ? "was successfull" : "is processing..."
          }`}
          dclass="mt-6 text-eiteen"
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
