import React, { useState } from "react";
import Heading from "../Heading";
import MasterCard from "@/features/profile/components/MasterCard";
import CardForm from "@/features/profile/components/CardForm";
import BankForm from "@/features/profile/components/BankForm";
import PayModalBottom from "@/features/profile/components/PayModalBottom";
import Choose from "../Choose";

const PaymentMethodModal = () => {
  const [methodOfPayment, setMethodOfPayment] = useState("card");

  const [formData, setFormData] = useState({
    name: "Susan Michael",
    expiry: "00/00",
    number: "1234 1234 1234 1234",
    cvv: "777",
  });

  return (
    <>
      <Heading
        title="Update payment method"
        tclass="payment-modal-title"
        description="update your card details"
      />

      {methodOfPayment === "card" && (
        <div className="card-container ">
          <MasterCard
            name={formData.name}
            expiry={formData.expiry}
            number={formData.number}
          />
        </div>
      )}

      <Choose
        choice1txt="Bank Card"
        choice2txt="Bank Account"
        handleChoice1={() => setMethodOfPayment("card")}
        handleChoice2={() => setMethodOfPayment("bank")}
        containerClass="mt-5 md:mt-10 flex items-center justify-between gap-10 max-w-[309px] mx-auto"
        btnClass="min-w-[114px] text-base font-semibold border-b-4"
      />

      {methodOfPayment === "card" && <CardForm formData={formData} />}
      {methodOfPayment === "bank" && <BankForm />}

      <div className="my-8 max-w-[343px] mx-auto">
        <PayModalBottom methodOfPayment={methodOfPayment} />
      </div>
    </>
  );
};

export default PaymentMethodModal;
