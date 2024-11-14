import React, { useState } from "react";
import Heading from "../Heading";
import MasterCard from "@/features/profile/components/MasterCard";
import CardForm from "@/features/profile/components/CardForm";
import BankForm from "@/features/profile/components/BankForm";
import PayModalBottom from "@/features/profile/components/PayModalBottom";
import Choose, { activateChooseBtn } from "../Choose";

const activeBtn = (condition) => {
  return activateChooseBtn(
    condition,
    "border-basic text-basic",
    "text-neutral-1000"
  );
};

const PaymentMethodModal = () => {
  const [methodOfPayment, setMethodOfPayment] = useState("card");

  const [formData, setFormData] = useState({
    name: "Susan Michael",
    expiry: "00/00",
    number: "123412341234234",
    cvv: "777",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value })
  }

  return (
    <>
      <Heading
        title="Update payment method"
        tclass="payment-modal-title"
        description="update your card details"
      />

      {methodOfPayment === "card" && (
        <div className="card-container">
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
        btnClass="border-b font-bold text-base w-[180px] p-4 rounded-none bg-transparentr"
        addedClass1={activeBtn(methodOfPayment == "card")}
        addedClass2={activeBtn(methodOfPayment === "bank")}
      />

      {methodOfPayment === "card" && <CardForm {...{...formData, handleChange}} />}
      {methodOfPayment === "bank" && <BankForm />}

      <div className="my-8 max-w-[343px] mx-auto">
        <PayModalBottom methodOfPayment={methodOfPayment} />
      </div>
    </>
  );
};

export default PaymentMethodModal;
